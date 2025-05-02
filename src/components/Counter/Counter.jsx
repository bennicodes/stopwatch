import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Counter.module.css";
const Counter = ({ initialCount = 0, min = 0, max = Infinity, step = 1 }) => {
  const [count, setCount] = useState(initialCount);
  // Subtract
  const handleDecrease = () => {
    if (count > min) {
      setCount((currentCount) => currentCount - step);
    }
  };
  
  // Add
  const handleIncrease = () => {
    if (count < max) {
      setCount((currentCount) => currentCount + step);
    }
  };
  return (
    <div className={styles.counterCard}>
      <Button
        ariaLabel="Decrease count"
        className={styles.decreaseButton}
        onClick={handleDecrease}
      >
        -
      </Button>
      <span className={styles.countDisplay}>{count}</span>
      <Button
        ariaLabel="Increase count"
        className={styles.increaseButton}
        onClick={handleIncrease}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
