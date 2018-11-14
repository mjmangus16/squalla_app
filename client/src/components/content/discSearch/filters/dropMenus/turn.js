import React from "react";

const turn = () => (
  <select className="filter-select-menu" id="search-turn">
    <option value="selected">TURN</option>
    <option value="t+1">+1</option>
    <option value="t0">0</option>
    <option value="t-1">-1</option>
    <option value="t-2">-2</option>
    <option value="t-3">-3</option>
    <option value="t-4">-4</option>
    <option value="t-5">-5</option>
  </select>
);

export default turn;
