import React from "react";

const stability = () => (
  <select className="filter-select-menu" id="stability-select">
    <option value="selected">STABILITY</option>
    <option value="vOverstable">Very Overstable</option>
    <option value="overstable">Overstable</option>
    <option value="stable">Stable</option>
    <option value="understable">Understable</option>
  </select>
);

export default stability;
