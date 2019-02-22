import React, { Component, Fragment } from "react";
import { Bar } from "react-chartjs-2";
import { teal, pink, lightBlue } from "@material-ui/core/colors";

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
          label: "Rounds Played",
          data: [3, 5, 6, 7, 10, 3, 5, 6, 7, 10, 22, 15],
          backgroundColor: teal[500]
        }
      ]
    }
  };
  render() {
    const { height } = this.props;
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
