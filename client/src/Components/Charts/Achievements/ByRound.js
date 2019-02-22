import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { deepPurple } from "@material-ui/core/colors";

class Achievements extends Component {
  state = {
    chartData: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

      datasets: [
        {
          data: [0, 3, 5, 9, 12, 12, 16, 16, 22, 27],
          borderColor: deepPurple[200]
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
            text: "Points Earned Per Round",
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
