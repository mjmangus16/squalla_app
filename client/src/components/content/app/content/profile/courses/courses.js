import React from "react";
import { Link } from "react-router-dom";

import AppMenu from "../../../appMenu";

import "../profile.css";

const courses = () => {
  return (
    <div className="squalla-app-container">
      <AppMenu />
      <div className="squalla-app-content-container">
        <div className="app-home-courses-content" />
        <div className="app-home-courses-nav">
          <Link to="/squallaApp/profile/courses" exact="true">
            <button className="app-home-nav-button" id="app-home-nav-selected">
              Courses
            </button>
          </Link>

          <Link to="/squallaApp/profile/courses/add" exact="true">
            <button className="app-home-nav-right">Add Course</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default courses;
