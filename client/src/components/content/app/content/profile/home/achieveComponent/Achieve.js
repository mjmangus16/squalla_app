import React from "react";

import expandArrow from "../../../../../../../img/expandArrow.png";
import collapseArrow from "../../../../../../../img/collapseArrow.png";

const Achieve = props => {
  console.log(props.data);

  const expandAchieveHandler = e => {
    if (e.target.parentElement.children[4].id === "item-hide") {
      e.target.parentElement.children[4].id = "";
      e.target.src = collapseArrow;
      e.target.className = "rounds-collapse-arrow";
    } else if (e.target.parentElement.children[4].id === "") {
      e.target.parentElement.children[4].id = "item-hide";
      e.target.src = expandArrow;
      e.target.className = "rounds-expand-arrow";
    }
  };

  let pStyle = {
    color: "var(--orange)"
  };
  return (
    <div className="achievements-achieve">
      <p
        className="achievements-achieve-name"
        style={props.data.count > 0 ? pStyle : null}
      >
        {props.data.name}
      </p>
      <p style={props.data.count > 0 ? pStyle : null}>{props.data.points}</p>
      <p style={props.data.count > 0 ? pStyle : null}>{props.data.count}</p>
      <input
        type="image"
        src={expandArrow}
        className="rounds-expand-arrow"
        alt="expand menu item icon"
        onClick={expandAchieveHandler}
      />
      <p className="achievements-achieve-desc" id="item-hide">
        {props.data.description}
      </p>
    </div>
  );
};

export default Achieve;
