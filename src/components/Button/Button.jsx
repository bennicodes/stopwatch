import buttonStyles from "./Button.module.css";

const Button = ({
  children = "Click",
  className,
  onClick,
  disabled = false,
  ariaLabel,
}) => {
  return (
    <button
      className={`${buttonStyles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
