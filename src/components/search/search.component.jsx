import React from "react";
import "./search.style.css"

export const Search = (props) => {
  let handleChange = props.handleChange;
  return (
    <input
      className="search"
      type="search"
      placeholder={props.place}
      onChange={handleChange}
    />
  );
};
