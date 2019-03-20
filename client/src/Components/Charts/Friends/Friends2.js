import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import chartColors from "../chartColors";
import withWidth from "@material-ui/core/withWidth";

const colors = chartColors();

class Friends extends Component {
  state = {
    chartData: {
      labels: this.props.data.map(friend => friend.friend),
      datasets: [
        {
          label: "Rounds",
          data: this.props.data.map(friend => friend.rounds),
          backgroundColor: colors[3]
        },
        {
          label: "Wins",
          data: this.props.data.map(friend => friend.wins),
          backgroundColor: colors[15]
        }
      ]
    }
  };
  render() {
    const { height } = this.props;
    return (
      <Bar
        data={this.state.chartData}
        height={height}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Rounds / Wins Per Friend",
            fontSize: this.props.width === "xs" ? 12 : 18
          },
          legend: {
            display: true,
            position: "top"
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  display: false
                }
              }
            ]
          }
        }}
      />
    );
  }
}

export default withWidth()(Friends);
