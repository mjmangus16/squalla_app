import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import chartColors from "../chartColors";

class Rounds extends Component {
  state = {
    chartData: {
      labels: [
        "Course1",
        "Course2",
        "Course3",
        "Course4",
        "Course5",
        "Course6",
        "Course7",
        "Course8",
        "Course9",
        "Course10"
      ],

      datasets: [
        {
          data: [2, -5, -17, -3, 4, -5, -11, 7, 0, 1],
          borderColor: chartColors()
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
            text: "Best Score By Course",
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

export default Rounds;
