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

class Courses extends Component {
  state = {
    chartData: {
      labels: [
        "Course1",
        "Course2",
        "Course3",
        "Course4",
        "Course5",
        "Course6",
        "Course7"
      ],
      datasets: [
        {
          label: "Rounds Played",
          data: [3, 5, 6, 7, 10, 3, 5],
          backgroundColor: [
            red[300],
            pink[300],
            purple[300],
            deepPurple[300],
            indigo[300],
            blue[300],
            lightBlue[300]
          ]
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
            text: "Rounds Per Course",
            fontSize: 20
          },
          legend: {
            display: false
          },
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

export default Courses;
