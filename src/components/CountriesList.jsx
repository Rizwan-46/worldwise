/* eslint-disable react/prop-types */
import Styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
export default function CountriesList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on the mao" />;
  const countries = [
    ...new Map(
      cities.map((city) => [
        city.country,
        { country: city.country, emoji: city.emoji },
      ])
    ).values(),
  ];
  return (
    <ul className={Styles.countryList}>
      {countries.map((country, i) => (
        <CityItem country={country} key={i + 1} />
      ))}
    </ul>
  );
}
