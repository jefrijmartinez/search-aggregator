import classes from "./Button.module.css";

const Button = (props) => {
  const { children, className, onClick, type, disabled, ...rest } = props;

  return (
    <button
      className={`${classes.btn} ${className ?? ""}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
