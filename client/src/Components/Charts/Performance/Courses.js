import React, { Component, Fragment } from "react";
import { Bar } from "react-chartjs-2";
import { teal, pink, lightBlue } from "@material-ui/core/colors";

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
        "Course7",
        "Course8",
        "Course9",
        "Course10"
      ],
      datasets: [
        {
          label: "+1",
          data: [3, 5, 6, 7, 10, 3, 5, 6, 7, 10],
          backgroundColor: teal[500]
        },
        {
          label: "0",
          data: [2, 4, 1, 8, 6, 2, 4, 1, 8, 6],
          backgroundColor: pink[100]
        },
        {
          label: "-1",
          data: [1, 6, 2, 11, 7, 4, 6, 9, 10, 2],
          backgroundColor: lightBlue[300]
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
            text: "Performance Points By Course",
            fontSize: 20
          },
          legend: {
            display: true,
            position: "top"
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
