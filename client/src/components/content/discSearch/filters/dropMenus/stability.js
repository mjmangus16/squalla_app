import React from "react";

const stability = props => (
  <select
    onChange={props.handler}
    className="filter-select-menu"
    id="stability-select"
  >
    <option value="selected">Stability</option>
    <option value="veryOverstable">Very Overstable</option>
    <option value="overstable">Overstable</option>
    <option value="stable">Stable</option>
    <option value="understable">Understable</option>
  </select>
);

export default stability;
