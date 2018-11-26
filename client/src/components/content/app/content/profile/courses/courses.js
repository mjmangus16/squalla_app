import React, { Component } from "react";
import { Link } from "react-router-dom";

import selectArrow from "../../../../../../img/selectArrow.png";

import AppMenu from "../../../appMenu";
import SelectedCourse from "./selectedCourse";

import "../profile.css";

class Courses extends Component {
  state = {
    courseSelected: false
  };

  selectedCourseData = {
    course: ""
  };

  selectCourseHandler = e => {
    this.setState({ courseSelected: !this.state.courseSelected });
    console.log(e.target.parentElement.firstChild.textContent);
    this.selectedCourseData.course =
      e.target.parentElement.firstChild.textContent;
  };

  course = (
    <div className="app-courses-course">
      <h3>Joseph Davis State Park</h3>
      <input
        type="image"
        src={selectArrow}
        className="app-courses-course-selectArrow"
        alt="expand course item icon"
        onClick={this.selectCourseHandler}
      />
      <div className="app-courses-course-data">
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
        <div className="app-courses-course-data-heading">
          <h4>Best</h4>
          <p>N/A</p>
          <p>N/A</p>
          <p>N/A</p>
          <p>N/A</p>
        </div>
      </div>
    </div>
  );

  course2 = (
    <div className="app-courses-course">
      <h3>Beaver Island State Park</h3>
      <input
        type="image"
        src={selectArrow}
        className="app-courses-course-selectArrow"
        alt="expand course item icon"
        onClick={this.selectCourseHandler}
      />
      <div className="app-courses-course-data">
        <div className="app-courses-course-data-heading">
          <div />
          <h4>Gold</h4>
          <h4>Blue</h4>
          <h4>White</h4>
          <h4>Red</h4>
        </div>
        <div className="app-courses-course-data-heading">
          <h4>Course Par</h4>
          <p>N/A</p>
          <p>N/A</p>
          <p>N/A</p>
          <p>N/A</p>
        </div>
        <div className="app-courses-course-data-heading">
          <h4>Best</h4>
          <p>N/A</p>
          <p>N/A</p>
          <p>N/A</p>
          <p>N/A</p>
        </div>
      </div>
    </div>
  );

  courses = [this.course, this.course2];

  render() {
    let displayContent;

    if (this.state.courseSelected === false) {
      displayContent = (
        <div className="app-home-courses-content">
          <div className="app-home-courses-heading">
            <div className="app-home-courses-heading-total">
              <h2>
                Total Courses: <span>12</span>
              </h2>
            </div>
            <input id="course-search" type="text" placeholder="Search..." />
          </div>
          <div className="app-home-courses-data-container">
            <div className="app-home-courses-data">{this.courses}</div>
          </div>
        </div>
      );
    } else {
      displayContent = (
        <SelectedCourse
          handler={this.selectCourseHandler}
          data={this.selectedCourseData}
        />
      );
    }

    return (
      <div className="squalla-app-container">
        <AppMenu link={"courses"} />
        <div className="squalla-app-content-container">
          {displayContent}
          <div className="app-home-courses-nav">
            <Link to="/squallaApp/profile/courses" exact="true">
              <button
                className="app-home-nav-button"
                id="app-home-nav-selected"
              >
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
  }
}

export default Courses;
