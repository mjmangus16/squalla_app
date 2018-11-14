import React from "react";

const distance = () => (
  <select className="filter-select-menu" id="distance-select">
    <option value="selected">DISTANCE</option>
    <option value="dd">Distance Driver</option>
    <option value="cd">Control Driver</option>
    <option value="mr">Mid Range</option>
    <option value="p">Putter</option>
  </select>
);

export default distance;
