import { createContext, useContext, useEffect, useReducer } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:8000";

const initialState = {
  cities: [],
  isLoading: false,
  error: "",
  currentCity: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    case "rejection":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };

    default:
      throw new Error("Unknow action occured");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejection",
          payload: "There was an error in fetching the data",
        });
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    if (Number(id) === currentCity.id) return;

    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejection",
        payload: "There was an error in fetching the data",
      });
    }
  }

  async function addCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCity),
      });

      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
      // console.log("City added:", data);
    } catch {
      dispatch({
        type: "rejection",
        payload: "There was an error in  the adding city",
      });
    }
  }
  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejection",
        payload: "There was an error in deleting the data",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{ isLoading, cities, currentCity, getCity, addCity, deleteCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("Cannot use Context outside the contextProvider");
  }
  return context;
}

export { CitiesProvider, useCities };
