import React, { Component, Fragment } from "react";
import { Bar } from "react-chartjs-2";
import { purple } from "@material-ui/core/colors";

class Friends extends Component {
  state = {
    chartData: {
      labels: [
        "Friend1",
        "Friend2",
        "Friend3",
        "Friend4",
        "Friend5",
        "Friend6",
        "Friend7",
        "Friend8",
        "Friend9",
        "Friend10"
      ],
      datasets: [
        {
          label: "Wins",
          data: [3, 5, 6, 7, 10, 3, 5, 6, 7, 10],
          borderColor: purple[300],
          borderWidth: 1
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
            text: "Wins vs Friends",
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

export default Friends;
