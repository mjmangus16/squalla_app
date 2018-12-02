import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import selectArrowBack from "../../../../../../img/selectArrowBack.png";

import "../profile.css";

class selectedCourse extends Component {
  state = {
    rounds: []
  };

  styleh3 = {
    color: "var(--orange)",
    fontWeight: "300"
  };

  componentDidMount() {
    axios
      .get(`/api/profiles/courses/name/${this.props.data.name}`)
      .then(res => {
        console.log(res.data);
        if (res.data) {
          console.log("works");
          this.setState({
            rounds: res.data.map(round => (
              <div>
                <p>{round.date}</p>
                <p>{round.course.name}</p>
                <p>{round.course.tees}</p>
                <p>{round.myScore}</p>
                <p>{round.scores.length}</p>
              </div>
            ))
          });
        }
      });
  }

  render() {
    return (
      <div className="selectedCourse-container">
        <input
          type="image"
          src={selectArrowBack}
          className="app-courses-course-selectArrow"
          alt="expand course item icon"
          onClick={this.props.handler}
        />
        <div className="selectedCourse-data">
          <h2 style={this.styleh3}>{this.props.data.name}</h2>
          <div
            className="selectedCourse-data-info1"
            style={{
              gridTemplateColumns: `repeat(${this.props.data.tees.length +
                1}, auto)`
            }}
          >
            <div />
            {this.props.data.tees.map(tee => (
              <h4 key={this.props.data.tees.indexOf(tee)}>{tee.tee}</h4>
            ))}
            <h4>Par</h4>
            {this.props.data.tees.map(tee => (
              <p key={this.props.data.tees.indexOf(tee)}>{tee.par}</p>
            ))}
            <h4>Best</h4>
            {this.props.data.tees.map(tee => (
              <p key={this.props.data.tees.indexOf(tee)}>N/A</p>
            ))}
            <h4>Average</h4>
            {this.props.data.tees.map(tee => (
              <p key={this.props.data.tees.indexOf(tee)}>N/A</p>
            ))}
            <h4>Rounds</h4>
            {this.props.data.tees.map(tee => (
              <p key={this.props.data.tees.indexOf(tee)}>N/A</p>
            ))}
          </div>
          <div className="selectedCourse-data-info2">
            <div className="app-home-rounds-heading">
              <h3>Date</h3>
              <h3>Course</h3>
              <h3>Tees</h3>
              <h3>Score</h3>
              <h3>Players</h3>
            </div>
            {this.state.rounds}
          </div>
        </div>
      </div>
    );
  }
}

export default selectedCourse;
