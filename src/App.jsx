import styles from "./App.module.css";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";

const App = () => {
  return (
    <div className={styles.rootContainer}>
      <WeatherWidget />
    </div>
  );
};

export default App;
