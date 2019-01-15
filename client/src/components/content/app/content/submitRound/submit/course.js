import React, { Component } from "react";

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

  displayTees = e => {
    let tees = document.querySelectorAll(".course-tee-buttons");

    for (let i = 0; i < tees.length; i++) {
      tees[i].style.display = "none";
      tees[i].parentElement.style.height = "50px";
      tees[i].parentElement.id = "";
      tees[i].parentElement.children[0].style.color = "var(--lightGrey)";
    }

    e.target.parentElement.style.height = "100px";
    e.target.parentElement.id = "black-background";
    e.target.parentElement.children[1].style.display = "block";
    e.target.parentElement.children[0].style.color = "var(--orange)";
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
            <button onClick={this.displayTees} className="course-name-button">
              {course.name}
            </button>
            <div className="course-tee-buttons">
              {course.tees.map(tee => (
                <button
                  onClick={this.props.handler}
                  key={course.tees.indexOf(tee)}
                  className="tee-name-button"
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
            Select the course and tees you played
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
