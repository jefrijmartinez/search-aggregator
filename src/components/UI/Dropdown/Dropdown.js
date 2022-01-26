import classes from "./Dropdown.module.css";
import { useState } from "react";

const Dropdown = (props) => {
  const { options, className, onChange, value } = props;
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      className={`${classes.dropdown} ${className ?? ""}`}
      value={selectedValue}
    >
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
