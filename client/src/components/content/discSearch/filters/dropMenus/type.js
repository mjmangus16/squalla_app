import React from "react";

const type = props => (
  <select
    onChange={props.handler}
    className="filter-select-menu"
    id="type-select"
  >
    <option value="selected">Type</option>
    <option value="distance-driver">Distance Driver</option>
    <option value="control-driver">Control Driver</option>
    <option value="mid-range">Mid Range</option>
    <option value="putter">Putter</option>
  </select>
);

export default type;
