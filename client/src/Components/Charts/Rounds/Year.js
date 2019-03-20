import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import chartColors from "../chartColors";

class Year extends Component {
  state = {
    chartData: {
      labels:
        Object.values(this.props.data).length >= 6
          ? [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ]
          : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Rounds Played",
          data: Object.values(this.props.data),
          backgroundColor: chartColors()
        }
      ]
    }
  };
  render() {
    return (
      <Bar
        data={this.state.chartData}
        height={275}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Rounds Played Per Month",
            fontSize: 20
          },
          legend: { display: false },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
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
