/* eslint-disable react/prop-types */
import React from "react";
import Styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

// eslint-disable-next-line react/prop-types
export default function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  // eslint-disable-next-line react/prop-types
  const { cityName, emoji, date, id, position } = city;
  console.log(position);
  function formatDate(input) {
    const date = new Date(input);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    // eslint-disable-next-line react/prop-types
    return date.toLocaleDateString("en-US", options);
  }

  function HandleDelete(e) {
    e.preventDefault();
    console.log("test");
    deleteCity(id);
  }
  return (
    <li>
      <Link
        className={`${Styles.cityItem} ${
          id === currentCity.id ? Styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={Styles.emoji}>{emoji}</span>
        <h3 className={Styles.name}>{cityName}</h3>
        <time className={Styles.date}>{formatDate(date)}</time>
        <button className={Styles.deleteBtn} onClick={HandleDelete}>
          &times;
        </button>
      </Link>
    </li>
  );
}
