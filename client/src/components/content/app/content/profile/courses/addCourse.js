import React from "react";
import { Link } from "react-router-dom";

import addButton from "../../../../../../img/addButton.png";

import AppMenu from "../../../appMenu";

import "../profile.css";

const addCourse = () => {
  let course = (
    <div className="app-courses-course-database">
      <h3>Joseph Davis State Park</h3>
      {/* <input
        type="image"
        src={addButton}
        className="app-courses-course-addButton"
        alt="expand course item icon"
      /> */}
      <div className="add-course-button">
        <h5>ADD</h5>
        <h5>COURSE</h5>
      </div>

      <div className="app-courses-course-data-add">
        <div className="app-courses-course-data-heading">
          <div />
          <h4>Gold</h4>
          <h4>Blue</h4>
          <h4>White</h4>
          <h4>Red</h4>
        </div>
        <div className="app-courses-course-data-heading">
          <h4>Par</h4>
          <p>N/A</p>
          <p>N/A</p>
          <p>N/A</p>
          <p>N/A</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="squalla-app-container">
      <AppMenu link={"courses"} />
      <div className="squalla-app-content-container">
        <div className="app-home-courses-content">
          <input id="course-search" type="text" placeholder="Search..." />
          <div className="app-home-courses-database">{[course, course]}</div>
        </div>
        <div className="app-home-courses-nav">
          <Link to="/squallaApp/profile/courses" exact="true">
            <button className="app-home-nav-button">Courses</button>
          </Link>

          <Link to="/squallaApp/profile/courses/add" exact="true">
            <button className="app-home-nav-right" id="app-home-nav-selected">
              Add Course
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default addCourse;
