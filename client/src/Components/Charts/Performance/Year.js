import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import chartColors from "../chartColors";
import withWidth from "@material-ui/core/withWidth";

const colors = chartColors();

class Year extends Component {
  state = {
    chartData: {
      labels:
        this.props.data.length >= 6
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
          data: this.props.data,
          borderColor: colors[0]
        }
      ]
    }
  };
  render() {
    const { height, data } = this.props;
    return (
      <Line
        data={this.state.chartData}
        height={height}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: true,
            text: "Performance Rating Trend By Month",
            fontSize: this.props.width === "xs" ? 12 : 18
          },
          legend: { display: false },
          scales: {
            yAxes: [
              {
                ticks: {
                  suggestedMax: 2 + Math.max(...data),
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

export default withWidth()(Year);
