import React from "react";
import { Link } from "react-router-dom";

import selectArrowBack from "../../../../../../img/selectArrowBack.png";

import "../profile.css";

const selectedCourse = props => {
  let style = {
    width: "75%",
    height: "90%",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "50px auto 50px"
  };

  let styleh3 = {
    color: "var(--orange)",
    fontWeight: "300"
  };

  return (
    <div classname="selectedCourse-container" style={style}>
      <input
        type="image"
        src={selectArrowBack}
        className="app-courses-course-selectArrow"
        alt="expand course item icon"
        onClick={props.handler}
      />
      <h1 style={styleh3}>{props.data.course}</h1>
    </div>
  );
};

export default selectedCourse;
