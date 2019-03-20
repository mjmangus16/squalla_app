import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import chartColors from "../chartColors";
import withWidth from "@material-ui/core/withWidth";

const colors = chartColors();

class Courses extends Component {
  state = {
    chartData: {
      labels: this.props.data.map(course => course.course),
      datasets: [
        {
          label: "Rating",
          data: this.props.data.map(course => course.rating),
          backgroundColor: colors
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
            text: "Performance Rating Per Course",
            fontSize: this.props.width === "xs" ? 12 : 18
          },
          legend: { display: false },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  display: false
                }
              }
            ]
          }
        }}
      />
    );
  }
}
export default withWidth()(Courses);
