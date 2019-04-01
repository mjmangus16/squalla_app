import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import chartColors from "../chartColors";
import withWidth from "@material-ui/core/withWidth";

const colors = chartColors();

class Rounds extends Component {
  state = {
    chartData: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

      datasets: [
        {
          data: this.props.data,
          borderColor: colors[0]
        }
      ]
    }
  };

  render() {
    const { height, data, width } = this.props;

    return (
      <Line
        data={this.state.chartData}
        height={height}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: true,
            text: "Performance Trend By Round",
            fontSize: width === "xs" ? 12 : 18
          },
          legend: { display: false },
          scales: {
            xAxes: [
              {
                ticks: {
                  suggestedMax: 2 + Math.max(...data)
                }
              }
            ]
          }
        }}
      />
    );
  }
}

export default withWidth()(Rounds);
