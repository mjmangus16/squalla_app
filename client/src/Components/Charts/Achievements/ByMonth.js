import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue
} from "@material-ui/core/colors";

class Points extends Component {
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
          data: [15, 12, 9, 12, 13, 15, 19, 22, 5, 16, 9, 2],
          backgroundColor: [
            red[300],
            pink[300],
            purple[300],
            deepPurple[300],
            indigo[300],
            blue[300],
            lightBlue[300],
            red[200],
            pink[200],
            purple[200],
            deepPurple[200]
          ]
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
            xAxes: [
              {
                ticks: {
                  max: 15
                }
              }
            ],
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Points Earned"
                }
              }
            ]
          }
        }}
      />
    );
  }
}

export default Points;
