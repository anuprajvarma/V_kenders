import React from "react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import "./style.css";

export const SearchBar = ({ value, changeInput }) => {
  return (
    <div className="searchBar-wrap">
      <SearchTwoToneIcon className="searchBar-icon" />
      <input
        type="text"
        placeholder="Meal and Hotels"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};
