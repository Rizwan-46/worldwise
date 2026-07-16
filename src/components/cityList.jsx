import React from "react";
import Styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

import { useCities } from "../contexts/CitiesContext";

export default function cityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on the mao" />;
  return (
    <ul className={Styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
