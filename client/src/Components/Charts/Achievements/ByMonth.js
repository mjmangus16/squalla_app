import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import chartColors from "../chartColors";

class Points extends Component {
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
          responsive: true,
          title: {
            display: true,
            text: "Points Earned Per Month",
            fontSize: 20
          },
          legend: { display: false },
          scales: {
            yAxes: []
          }
        }}
      />
    );
  }
}

export default Points;
