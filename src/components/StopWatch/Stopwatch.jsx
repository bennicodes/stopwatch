import { useEffect, useState } from "react";
import styles from "./Stopwatch.module.css";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState({
    milliSeconds: 0,
    seconds: 0,
    minutes: 0,
  });

  let interval;
  useEffect(() => {
    if (!isRunning) return;

    interval = setInterval(() => {
      setTime((prevTime) => {
        let newMilliSeconds = prevTime.milliSeconds + 10;
        let newSeconds = prevTime.seconds;
        let newMinutes = prevTime.minutes;

        if (newMilliSeconds === 1000) {
          newSeconds += 1;
          newMilliSeconds = 0;
        }

        if (newSeconds === 60) {
          newMinutes += 1;
          newSeconds = 0;
        }

        return {
          minutes: newMinutes,
          seconds: newSeconds,
          milliSeconds: newMilliSeconds,
        };
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <div className={styles.stopwatchContainer}>
      <div className={styles.timerLogoContainer}>
        <img
          src="/icons/timer.png"
          alt="Timer logo"
          className={`${styles.timerLogo} ${isRunning && styles.runningLogo}`}
        />
      </div>
      {/* ----------------------------- */}
      <div className={styles.timerContainer}>
        <span className={styles.minutes}>
          {time.minutes > 9 ? time.minutes : `0${time.minutes}`}
        </span>
        :
        <span className={styles.seconds}>
          {time.seconds > 9 ? time.seconds : `0${time.seconds}`}
        </span>
        :
        <span className={styles.milliSeconds}>
          {String(time.milliSeconds).padStart(3, "0")}
        </span>
      </div>
      {/* -------------------------- */}
      <div className={styles.controlsContainer}>
        <button
          className={styles.controlButton}
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className={styles.controlButton}
          onClick={() => setIsRunning(false)}
        >
          Pause
        </button>
        <button
          className={styles.controlButton}
          onClick={() => {
            setIsRunning(false);
            setTime({
              milliSeconds: 0,
              seconds: 0,
              minutes: 0,
            });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
