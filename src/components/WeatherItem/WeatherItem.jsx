import { useEffect, useState } from "react";
import styles from "./WeatherItem.module.css";

const WeatherItem = ({ day }) => {
  const [forecastDay, setForecastDay] = useState("");

  useEffect(() => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(day?.date);
    const weekday = weekdays[date.getDay()];

    const dayOfMonth = date.getDate();

    let sufix = "th";
    if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
      sufix = "st";
    } else if (dayOfMonth === 2 || dayOfMonth === 22) {
      sufix = "nd";
    } else if (dayOfMonth === 3 || dayOfMonth === 23) {
      sufix = "rd";
    }
    const formattedDate = `${weekday} ${dayOfMonth}${sufix}`;
    setForecastDay(formattedDate);
  });

  return (
    <div className={styles.weatherItemContainer}>
      <h4>{forecastDay}</h4>
      <span>
        <img src={day?.day?.condition.icon} alt="weather icon" />
      </span>
      <p>Max: {Math.round(day?.day?.maxtemp_c)}&deg;</p>
      <p>Min: {Math.round(day?.day?.mintemp_c)}&deg;</p>
    </div>
  );
};

export default WeatherItem;
