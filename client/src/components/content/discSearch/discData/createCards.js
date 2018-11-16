import React from "react";

import logoFunction from "./cardsLogo";

const createCards = discsArray => {
  const cardsArray = discsArray.map((disc, index) => (
    <div className="search-card" key={index}>
      <p className="search-card-name">{disc.Name}</p>
      <div className="search-card-logo-container">
        <img
          className="search-card-logo"
          src={logoFunction(disc.Manufacturer)}
          alt={disc.Manufacturer}
        />
      </div>

      <div className="search-card-details">
        <p className="search-card-distance-heading">{disc.Distance}</p>
        <div className="search-card-ratings-heading">
          <div>
            <p className="search-card-ratings-speed">{disc.Speed}</p>
          </div>
          <div>
            <p className="search-card-ratings-glide">{disc.Glide}</p>
          </div>
          <div>
            <p className="search-card-ratings-turn">{disc.Turn}</p>
          </div>
          <div>
            <p className="search-card-ratings-fade">{disc.Fade}</p>
          </div>
        </div>
        <p className="search-card-stability-heading">{disc.Stability}</p>
        <a href={disc.Link}>
          <p className="search-card-more-info">MORE INFO</p>
        </a>
      </div>
    </div>
  ));
  return cardsArray;
};

export default createCards;
