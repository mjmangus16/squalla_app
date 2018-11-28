import React from "react";

const course = () => {
  let course = (
    <div className="app-submitRound-players-player">
      <p>Joseph Davis State Park</p>
    </div>
  );

  let course2 = (
    <div className="app-submitRound-players-player">
      <p>Beaver Island State Park</p>
    </div>
  );

  let courses = [
    course,
    course2,
    course,
    course2,
    course,
    course2,
    course,
    course2
  ];

  return (
    <div className="app-submitRound-submit-content-course">
      <div>
        <h3 className="app-submitRound-submit-content-course-h3">
          Select the course that you played
        </h3>
        <input
          id="submitRound-course-search"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="app-submitRound-submit-content-courses-container">
        <div className="app-submitRound-submit-content-courses">{courses}</div>
      </div>
    </div>
  );
};

export default course;
