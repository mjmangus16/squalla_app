import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";

import selectArrowBack from "../../../../../../img/selectArrowBack.png";

import expandArrow from "../../../../../../img/expandArrow.png";
import collapseArrow from "../../../../../../img/collapseArrow.png";

import "./selectedCourse.css";

class selectedCourse extends Component {
  state = {
    rounds: [],
    courseStats: []
  };

  styleh3 = {
    color: "var(--orange)",
    fontWeight: "300"
  };

  fontColor = "var(--lightGrey)";

  componentDidMount() {
    axios
      .get(`/api/profiles/courses/name/${this.props.data.name}`)
      .then(res => {
        if (res.data) {
          console.log(res.data);
          this.setState({
            rounds: res.data.map(round => (
              <div
                className="app-home-rounds-round-selected"
                key={res.data.indexOf(round)}
              >
                <Moment format="MM/DD/YY">{round.date}</Moment>
                <p>{round.course.tees}</p>
                <p>{round.myScore}</p>
                <p>{round.scores.length}</p>
                <input
                  type="image"
                  src={expandArrow}
                  className="rounds-expand-arrow"
                  alt="expand menu item icon"
                  onClick={this.expandRoundHandler}
                />
                <div className="app-home-rounds-round-more" id="item-hide">
                  <div className="app-home-rounds-round-more-heading">
                    <h4>Username</h4>
                    <h4>Score</h4>
                  </div>
                  <div>
                    {round.scores.map(playerScore => (
                      <div
                        className="app-home-rounds-round-more-data"
                        key={round.scores.indexOf(playerScore)}
                      >
                        <p>{playerScore.player}</p>
                        <p>{playerScore.score}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )),
            courseStats: getCourseStats(res.data, this.props.data.tees)
          });
        }
      });
  }

  getFontColor = item => {
    let color = {};
    if (item === "N/A" || item === 0) {
      color.color = "var(--lightGrey)";
    } else {
      color.color = "var(--orange)";
    }
    return color;
  };

  expandRoundHandler = e => {
    if (e.target.parentElement.children[5].id === "item-hide") {
      e.target.parentElement.children[5].id = "";
      e.target.src = collapseArrow;
      e.target.className = "rounds-collapse-arrow";
    } else if (e.target.parentElement.children[5].id === "") {
      e.target.parentElement.children[5].id = "item-hide";
      e.target.src = expandArrow;
      e.target.className = "rounds-expand-arrow";
    }
  };

  render() {
    return (
      <div className="selectedCourse-container">
        <div className="selectedCourse-data">
          <input
            type="image"
            src={selectArrowBack}
            className="app-courses-course-backArrow"
            alt="expand course item icon"
            onClick={this.props.handler}
          />
          <h2 style={this.styleh3}>{this.props.data.name}</h2>
          <div
            className="selectedCourse-data-info1"
            style={{
              gridTemplateColumns: `repeat(${this.props.data.tees.length +
                1}, auto)`
            }}
          >
            <h4>Tees</h4>
            {this.props.data.tees.map(tee => (
              <h4 key={this.props.data.tees.indexOf(tee)}>{tee.tee}</h4>
            ))}
            <h4>Par</h4>
            {}
            {this.props.data.tees.map(tee => (
              <p
                key={this.props.data.tees.indexOf(tee)}
                style={this.getFontColor(tee.par)}
              >
                {tee.par}
              </p>
            ))}
            <h4>Best</h4>
            {this.state.courseStats.map(tee => (
              <p
                className="selectedCourse-stats-p"
                style={this.getFontColor(tee.best)}
                key={this.state.courseStats.indexOf(tee)}
              >
                {tee.best}
              </p>
            ))}
            <h4>Average</h4>
            {this.state.courseStats.map(tee => (
              <p
                className="selectedCourse-stats-p"
                style={this.getFontColor(tee.avg)}
                key={this.state.courseStats.indexOf(tee)}
              >
                {tee.avg}
              </p>
            ))}
            <h4>Rounds</h4>
            {this.props.data.tees.map(tee => (
              <p
                key={this.props.data.tees.indexOf(tee)}
                className="selectedCourse-stats-p"
                style={this.getFontColor(tee.count)}
              >
                {tee.count}
              </p>
            ))}
          </div>
          <div className="selectedCourse-data-info2">
            <div className="app-home-rounds-heading-selectedCourse">
              <h3>Date</h3>
              <h3>Tees</h3>
              <h3>Score</h3>
              <h3>Players</h3>
            </div>
            <div className="selectedCourse-rounds-container">
              <div className="selectedCourse-rounds">
                {this.state.rounds.length > 0 ? (
                  this.state.rounds
                ) : (
                  <p className="selectedCourse-rounds-p">
                    You have not played any rounds at this course yet.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default selectedCourse;

const getCourseStats = (rounds, tees) => {
  for (let i = 0; i < tees.length; i++) {
    let roundCount = 0;
    let sum = 0;
    tees[i].count = 0;
    for (let y = 0; y < rounds.length; y++) {
      if (tees[i].tee === rounds[y].course.tees) {
        roundCount++;
        sum = sum + parseInt(rounds[y].myScore);
        tees[i].avg = Math.ceil(sum / roundCount);
        tees[i].count = roundCount;
        if (rounds[y].myScore < tees[i].best || tees[i].best === "N/A") {
          tees[i].best = rounds[y].myScore;
        }
      }
    }
  }
  return tees;
};
