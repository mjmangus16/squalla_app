import React, { Component } from "react";
import axios from "axios";

import Modal from "../../../../../UI/Modal/Modal";

import AppMenu from "../../../appMenu";
import NavButtons from "../../../navButtons";

import "./addCourse.css";

class AddCourse extends Component {
  state = {
    courses: [],
    courseAdded: "",
    showModal: false
  };

  removeModal = () => {
    this.setState({ showModal: false });
  };

  addCourseHandler = e => {
    let course = {};
    course.name = e.target.parentElement.firstChild.textContent;
    axios
      .post("/api/profiles/courses/add", course)
      .then(res => {
        if (res.data.course) {
          this.setState({
            courseAdded: res.data.course,
            showModal: true
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
    let navButtonLinks = [
      "/squallaApp/profile/courses",
      "/squallaApp/profile/courses/add"
    ];
    let navButtonNames = ["Courses", "Add Course"];
    return (
      <div className="squalla-app-container">
        <AppMenu link={"courses"} />

        <div className="squalla-app-content-container">
          <Modal show={this.state.showModal} remove={this.removeModal}>
            <div className="add-friend-modal-alert">
              {this.state.courseAdded}
              <button onClick={this.removeModal}>close</button>
            </div>
          </Modal>
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
          <NavButtons
            buttons={2}
            selected={2}
            links={navButtonLinks}
            names={navButtonNames}
          />
        </div>
      </div>
    );
  }
}

export default AddCourse;
