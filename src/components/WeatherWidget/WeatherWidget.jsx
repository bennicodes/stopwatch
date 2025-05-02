import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Input from "../Input/Input";
import Spinner from "../Spinner/Spinner";
import WeatherItem from "../WeatherItem/WeatherItem";
import styles from "./WeatherWidget.module.css";

const WeatherWidget = () => {
  // State variables
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherForecastData, setWeatherForecastData] = useState(null);
  const [currentDate, setCurrentDate] = useState("");
  const [error, setError] = useState("");
  const [isFetchingWeather, setIsFetchingWeather] = useState(false);

  // Fetch weather data
  const fetchWeatherCondition = async () => {
    console.log("sending request");

    try {
      setIsFetchingWeather(true);
      const response = await fetch(
        `http://localhost:3001/weather?q=${searchQuery}`
      );
      const result = await response.json();
      if (result.error || !result.location) {
        throw new Error(result.error?.message);
      }
      console.log(result);
      setWeatherForecastData(result);
      setError("");
    } catch (error) {
      setError(error.message);
      setWeatherForecastData(null);
    } finally {
      setIsFetchingWeather(false);
    }
  };
  useEffect(() => {
    fetchWeatherCondition();
  }, []);

  const handleSearchClick = () => {
    if (searchQuery) {
      fetchWeatherCondition();
    }
    setSearchQuery("");
  };

  const formatCurrentDate = () => {
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);

    setCurrentDate(formattedDate);
  };

  useEffect(() => {
    formatCurrentDate();
  }, []);
  return (
    <div className={styles.weatherWidgetContainer}>
      {isFetchingWeather && <Spinner />}
      {/* Search section */}
      <div className={styles.searchContainer}>
        <Input
          type="search"
          placeholder="Enter city name"
          id="search"
          className={styles.weatherInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
        />
        <Button className={styles.searchButton} onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </div>
      {/* -------------------------- */}
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <h4>Current forecast for the {currentDate}</h4>
          <div className={styles.weatherBasicInfo}>
            <div className={styles.locationDetails}>
              <span className={styles.locationIcon}>
                <FontAwesomeIcon icon={faLocationDot} size="2xl" />
              </span>
              <p className={styles.cityName}>
                {weatherForecastData?.location?.name}
              </p>
              <p className={styles.countryName}>
                {weatherForecastData?.location?.country}
              </p>
            </div>
            {/* -------------- */}
            <div className={styles.tempDetails}>
              <span className={styles.currentWeatherIcon}>
                <img
                  src={weatherForecastData?.current?.condition.icon}
                  alt="Current weather icon"
                />
              </span>
              <p className={styles.temperature}>
                {weatherForecastData?.current?.temp_c
                  ? Math.round(weatherForecastData.current.temp_c)
                  : "--"}
                °C
              </p>
              <p className={styles.currentCondition}>
                {weatherForecastData?.current?.condition.text}
              </p>
            </div>
          </div>
          <hr />
          {/* ---------------- */}
          <div className={styles}>
            <h4 className={styles.forecastHeading}>
              3-Day Temperature Overview
            </h4>
            <ul className={styles.forecastContainer}>
              {weatherForecastData &&
                weatherForecastData?.forecast?.forecastday?.map((day) => {
                  return <WeatherItem day={day} key={day.date_epoch} />;
                })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
export default WeatherWidget;
