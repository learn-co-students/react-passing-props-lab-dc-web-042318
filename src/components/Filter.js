import React, { Component } from "react";

const Filter = (props) => {
  console.log(props);
  return (
    <select onChange={props.handleChange} defaultValue="all">
      <option value="all">All</option>
      {props.filters.map((filter) => (
        <option key={filter} value={filter}>
          {filter}
        </option>
      ))}
    </select>
  );
};

Filter.defaultProps = {
  filters: [],
  handleChange: function() {}
};

export default Filter;
