import styles from "./App.module.css";
import Stopwatch from "./components/StopWatch/Stopwatch";

const App = () => {
  return (
    <div className={styles.rootContainer}>
      <Stopwatch />
    </div>
  );
};

export default App;
