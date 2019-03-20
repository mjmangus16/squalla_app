import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import chartColors from "../chartColors";
import withWidth from "@material-ui/core/withWidth";

const getLabels = data => {
  let array = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].course.length > 15) {
      array.push(data[i].course.substring(0, 15) + "..");
    } else {
      array.push(data[i].course.substring(0, 15));
    }
  }
  return array;
};

class Courses extends Component {
  state = {
    chartData: {
      labels: getLabels(this.props.data),
      datasets: [
        {
          label: "Rounds Played",
          data: this.props.data.map(course => course.rounds),
          backgroundColor: chartColors()
        }
      ]
    }
  };
  render() {
    const { height } = this.props;
    return (
      <HorizontalBar
        data={this.state.chartData}
        height={height}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Rounds Per Course",
            fontSize: this.props.width === "xs" ? 12 : 18
          },

          legend: {
            display: false
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.yLabel;
              }
            }
          },

          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ],
            yAxes: [
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
