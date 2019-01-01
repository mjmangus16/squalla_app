import React, { Component } from "react";
import axios from "axios";

class Course extends Component {
  searchByNameHandler = () => {
    let input = document.getElementById("submitRound-course-search");
    let filter = input.value.toUpperCase();
    let courses = document.querySelectorAll(
      ".app-submitRound-submit-content-course-course"
    );

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
    let coursesContent = [];
    if (this.props.data.length > 0) {
      coursesContent.push(
        this.props.data.map(course => (
          <div
            className="app-submitRound-submit-content-course-course"
            key={this.props.data.indexOf(course)}
          >
            <h4>{course.name}</h4>
            <div>
              {course.tees.map(tee => (
                <button
                  onClick={this.props.handler}
                  key={course.tees.indexOf(tee)}
                >
                  {tee.tee}
                </button>
              ))}
            </div>
          </div>
        ))
      );
    } else {
      coursesContent = (
        <p className="orange-text">
          You must add a course to your profile before you can submit a round
        </p>
      );
    }

    return (
      <div className="app-submitRound-submit-content-course">
        <div>
          <h3 className="app-submitRound-submit-content-course-h3">
            Select the tees for the course you played.
          </h3>
          <input
            id="submitRound-course-search"
            type="text"
            placeholder="Search..."
            onChange={this.searchByNameHandler}
          />
        </div>
        <div className="app-submitRound-submit-content-courses-container">
          <div className="app-submitRound-submit-content-courses">
            {coursesContent}
          </div>
        </div>
      </div>
    );
  }
}

export default Course;
