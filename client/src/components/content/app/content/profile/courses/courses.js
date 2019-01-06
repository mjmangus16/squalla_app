import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../../../../../actions/profileActions";

import getCoursesData from "../../../functions/courses";

import selectArrow from "../../../../../../img/selectArrow.png";

import AppMenu from "../../../appMenu";
import SelectedCourse from "./selectedCourse";

import "./courses.css";

class Courses extends Component {
  state = {
    courseSelected: false,
    courseData: {}
  };

  componentDidMount() {
    this.props.getProfile();
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
    const { profile } = this.props.profile;
    let coursesContent = [];
    let displayContent;
    if (Object.keys(profile).length > 0) {
      let coursesData = getCoursesData(profile);
      console.log(coursesData);
      if (coursesData.length > 0) {
        coursesContent.push(
          coursesData.map(course => (
            <div
              className="app-courses-course"
              key={coursesData.indexOf(course)}
            >
              <h3 className="app-courses-course-name">{course.name}</h3>
              <h3 className="app-courses-course-holes">{course.holes}</h3>

              <div
                className="app-courses-course-data"
                style={{
                  gridTemplateColumns: `repeat(${course.tees.length +
                    1}, 40px)`,
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
        );
      } else {
        coursesContent = (
          <p className="orange-text">You have not added any courses yet</p>
        );
      }

      if (this.state.courseSelected === false) {
        displayContent = (
          <div className="app-home-courses-content">
            <div className="app-home-courses-heading">
              <div className="app-home-courses-heading-total">
                <h2>
                  Total Courses: <span>{profile.courses.length}</span>
                </h2>
              </div>
              <input
                id="course-search"
                type="text"
                placeholder="Search..."
                onChange={this.searchByNameHandler}
              />
            </div>
            <div className="app-home-courses-data-heading">
              <p>Course</p>
              <p>Holes</p>
              <p id="tees-par">Tees / Par</p>
            </div>
            <div className="app-home-courses-data-container">
              <div className="app-home-courses-data">{coursesContent}</div>
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
    }

    return (
      <div className="squalla-app-container">
        <AppMenu link={"courses"} />
        <div className="squalla-app-content-container">
          {displayContent}
          <div className="app-home-courses-nav app-nav">
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

Courses.propTypes = {
  auth: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfile }
)(Courses);
