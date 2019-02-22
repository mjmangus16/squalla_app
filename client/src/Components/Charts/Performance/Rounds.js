import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Rounds extends Component {
  state = {
    chartData: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

      datasets: [
        {
          data: [1, 2, 1, 2, 3, 4, 5, 4, 5, 6],
          borderColor: "green"
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
            text: "Performance Trend By Rounds",
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
