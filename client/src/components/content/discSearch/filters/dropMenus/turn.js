import React from "react";

const turn = props => (
  <select
    onChange={props.handler}
    className="filter-select-menu"
    id="search-turn"
  >
    <option value="selected">Turn</option>
    <option value="+1">+1</option>
    <option value="0">0</option>
    <option value="-1">-1</option>
    <option value="-2">-2</option>
    <option value="-3">-3</option>
    <option value="-4">-4</option>
    <option value="-5">-5</option>
  </select>
);

export default turn;
