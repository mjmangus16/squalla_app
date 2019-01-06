import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AppMenu from "../../../appMenu";

import "./addCourse.css";

class AddCourse extends Component {
  state = {
    courses: [],
    courseAdded: ""
  };

  addCourseHandler = e => {
    let course = {};
    course.name = e.target.parentElement.firstChild.textContent;
    axios
      .post("/api/profiles/courses/add", course)
      .then(res => {
        console.log(res.data);
        if (res.data.course) {
          this.setState({
            courseAdded: `${course.name} has already been added to your profile`
          });
        } else {
          this.setState({
            courseAdded: `${course.name} has been added to your profile`
          });
        }
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios.get("/api/courses/all").then(res => {
      this.setState({
        courses: res.data.map(course => (
          <div
            className="app-courses-course-add"
            key={res.data.indexOf(course)}
          >
            <h3>{course.name}</h3>

            <button
              className="add-course-button"
              onClick={this.addCourseHandler}
            >
              Add Course
            </button>
          </div>
        ))
      });
    });
  }

  searchByNameHandler = () => {
    let input = document.getElementById("course-search");
    let filter = input.value.toUpperCase();
    let courses = document.querySelectorAll(".app-courses-course-add");

    for (let i = 0; i < courses.length; i++) {
      let name = courses[i].firstChild.textContent;
      if (name.toUpperCase().indexOf(filter) > -1) {
        courses[i].style.display = "";
      } else {
        courses[i].style.display = "none";
      }
    }
  };

  render() {
    return (
      <div className="squalla-app-container">
        <AppMenu link={"courses"} />
        <div className="squalla-app-content-container">
          <div className="app-home-courses-content-addCourse">
            <input
              id="course-search"
              type="text"
              placeholder="Search..."
              onChange={this.searchByNameHandler}
            />

            <div className="app-home-courses-data-container">
              {this.state.courses}
            </div>
          </div>
          <div className="app-home-courses-nav app-nav">
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
  }
}

export default AddCourse;
