import styles from "./Input.module.css";

const Input = ({
  label,
  type = "text",
  value,
  placeholder = "",
  className,
  id,
  errorMessage,
  onChange,
  onKeyDown,
}) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={`${styles.input} ${className}`}
      />

      {errorMessage && <p className={styles.errorText}>{errorMessage}</p>}
    </>
  );
};

export default Input;
