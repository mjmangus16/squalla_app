import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import selectArrow from "../../../../../../img/selectArrow.png";

import AppMenu from "../../../appMenu";
import SelectedCourse from "./selectedCourse";

import "../profile.css";

class Courses extends Component {
  state = {
    courseSelected: false,
    courses: [],
    courseData: {}
  };

  componentDidMount() {
    axios.get("/api/profiles/courses/all").then(res => {
      this.setState({
        courses: res.data.map(course => (
          <div className="app-courses-course" key={res.data.indexOf(course)}>
            <h3>{course.name}</h3>

            <div
              className="app-courses-course-data"
              style={{
                gridTemplateColumns: `repeat(${course.tees.length + 1}, 40px)`,
                gridTemplateRows: "20px 20px"
              }}
            >
              <h4 id="extra-padding-h4-2">Tees:</h4>
              {course.tees.map(tee => (
                <h4 key={course.tees.indexOf(tee)}>{tee.tee}</h4>
              ))}

              <h4 id="extra-padding-h4">Par:</h4>
              {course.tees.map(tee => (
                <p key={course.tees.indexOf(tee)}>{tee.par}</p>
              ))}
              {/* <div className="app-courses-course-data-heading">
                <h4>Best</h4>
                
              </div> */}
            </div>
            <input
              type="image"
              src={selectArrow}
              className="app-courses-course-selectArrow"
              alt="expand course item icon"
              onClick={() =>
                this.setState({
                  courseSelected: !this.state.courseSelected,
                  courseData: course
                })
              }
            />
          </div>
        ))
      });
    });
  }

  searchByNameHandler = () => {
    let input = document.getElementById("course-search");
    let filter = input.value.toUpperCase();
    let courses = document.querySelectorAll(".app-courses-course");

    for (let i = 0; i < courses.length; i++) {
      let name = courses[i].firstChild.textContent;
      if (name.toUpperCase().indexOf(filter) > -1) {
        courses[i].style.display = "";
      } else {
        courses[i].style.display = "none";
      }
    }
  };

  selectCourseHandler = courseData => {
    this.setState({
      courseSelected: !this.state.courseSelected,
      courseData: courseData
    });
  };

  render() {
    let displayContent;

    if (this.state.courseSelected === false) {
      displayContent = (
        <div className="app-home-courses-content">
          <div className="app-home-courses-heading">
            <div className="app-home-courses-heading-total">
              <h2>
                Total Courses: <span>{this.state.courses.length}</span>
              </h2>
            </div>
            <input
              id="course-search"
              type="text"
              placeholder="Search..."
              onChange={this.searchByNameHandler}
            />
          </div>
          <div className="app-home-courses-data-container">
            <div className="app-home-courses-data">{this.state.courses}</div>
          </div>
        </div>
      );
    } else {
      displayContent = (
        <SelectedCourse
          handler={this.selectCourseHandler}
          data={this.state.courseData}
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
