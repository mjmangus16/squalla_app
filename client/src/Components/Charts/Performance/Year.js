import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Year extends Component {
  state = {
    chartData: {
      labels: [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Nov",
        "Dec"
      ],

      datasets: [
        {
          data: [3, 12, 9, 11, 15, 14, 17, 15, 22, 25, 20],
          borderColor: "lightBlue"
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
            text: "Performance Trend Over Year",
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

export default Year;
