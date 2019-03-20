import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import chartColors from "../chartColors";

const colors = chartColors();

class Achievements extends Component {
  state = {
    chartData: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

      datasets: [
        {
          data: this.props.data,
          borderColor: colors[0]
        }
      ]
    }
  };
  render() {
    const { height } = this.props;
    return (
      <Line
        data={this.state.chartData}
        height={height}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: true,
            text: "Points Trend By Round",
            fontSize: 20
          },
          legend: { display: false },
          scales: {
            xAxes: [
              {
                ticks: {
                  max: 10
                }
              }
            ]
          }
        }}
      />
    );
  }
}

export default Achievements;
