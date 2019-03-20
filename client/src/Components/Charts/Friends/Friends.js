import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import chartColors from "../chartColors";
import withWidth from "@material-ui/core/withWidth";

class Friends extends Component {
  state = {
    chartData: {
      labels: this.props.data.map(friend => friend.friend),
      datasets: [
        {
          label: "Rounds Played Together",
          data: this.props.data.map(friend => friend.rounds),
          backgroundColor: chartColors()
        }
      ]
    }
  };
  render() {
    const { height } = this.props;
    return (
      <HorizontalBar
        data={this.state.chartData}
        height={height}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Rounds Played With Friends",
            fontSize: this.props.width === "xs" ? 12 : 18
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ],
            yAxes: [
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
