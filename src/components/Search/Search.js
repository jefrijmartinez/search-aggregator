import { useState } from "react";
import Button from "../UI/Button/Button";
import Dropdown from "../UI/Dropdown/Dropdown";
import Input from "../UI/Input/Input";
import classes from "./Search.module.css";

const newsSources = [
  { value: "all", text: "All" },
  { value: "gnews", text: "Gnews" },
  { value: "currents", text: "Currents" },
];

const Search = (props) => {
  const {
    onSearch,
    onSourceChange,
    className,
    queryValue,
    sourceValue,
    placeholder,
  } = props;
  const [query, setQuery] = useState(queryValue);
  const [source, setSource] = useState(sourceValue);

  const handleSourceChange = (e) => {
    setSource(e);
    onSourceChange(e);
  };

  const handleQueryChange = (query) => {
    setQuery(query);
  };

  const handleSearch = () => {
    onSearch({ source, query });
  };

  return (
    <div className={`${classes.search} ${className || ""}`}>
      <div className={classes["search-controls"]}>
        <Dropdown
          options={newsSources}
          value={source}
          onChange={handleSourceChange}
        />
        <Input
          className={classes.input}
          onChange={handleQueryChange}
          value={query}
          onEnter={handleSearch}
          type="text"
          placeholder={placeholder}
        />
        <Button className={classes.button} onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
