import { useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const { children, className, onChange, onEnter, type, value, ...rest } =
    props;
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const handleKeyPress = (e) => {
    e.charCode === 13 && onEnter(inputValue);
  };

  return (
    <input
      className={`${classes.input} ${className ?? ""}`}
      onChange={handleChange}
      value={inputValue}
      type={type}
      onKeyPress={handleKeyPress}
      {...rest}
    />
  );
};

export default Input;
