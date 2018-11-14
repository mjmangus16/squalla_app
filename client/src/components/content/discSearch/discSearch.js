import React, { Component } from "react";

import discsArray from "./discData/discs";

import createCards from "./discData/cardsArray";

import DistanceSelect from "./filters/dropMenus/distance";
import ManufactureSelect from "./filters/dropMenus/manufacture";
import StabilitySelect from "./filters/dropMenus/stability";
import SpeedSelect from "./filters/dropMenus/speed";
import GlideSelect from "./filters/dropMenus/glide";
import TurnSelect from "./filters/dropMenus/turn";
import FadeSelect from "./filters/dropMenus/fade";

import "./discSearch.css";
import "./card.css";
import "./filters/dropMenus/dropMenu.css";

class discSearch extends Component {
  render() {
    return (
      <div className="disc-search-container">
        <div className="filter-container">
          <div className="filter-container1">
            <h4>Selected</h4>
            <div className="filter-container1-selected-filters-out">
              <div className="filter-container1-selected-filters-in" />
            </div>
          </div>
          <div className="filter-container2">
            <h2 className="filter-container-heading">FILTER</h2>
            <div className="filter-buttons1">
              <DistanceSelect />
              <ManufactureSelect />
              <StabilitySelect />
            </div>
            <div className="filter-buttons2">
              <SpeedSelect />
              <GlideSelect />
              <TurnSelect />
              <FadeSelect />
            </div>
            <div className="filter-buttons3">
              <button id="filter-reset-button">RESET</button>
              <button id="filter-submit-button">SUBMIT</button>
            </div>
          </div>
        </div>
        <div className="search-content-container">
          <div className="search-content-top-bar">
            <div id="filter-card-search">
              <input type="text" placeholder="Search By Name" />
            </div>
          </div>
          <div className="search-content-cards-container">
            <div className="search-content-cards">
              {createCards(discsArray)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default discSearch;
