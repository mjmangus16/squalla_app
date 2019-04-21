import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import withWidth from "@material-ui/core/withWidth";
import { red, blue, green, deepPurple } from "@material-ui/core/colors";

class Overall extends Component {
  state = {
    chartData: {
      labels: ["+2", "+1", "0", "-1"],

      datasets: [
        {
          data: [
            this.props.data.plus2,
            this.props.data.plus1,
            this.props.data.even,
            this.props.data.minus
          ],
          backgroundColor: [deepPurple[100], green[200], blue[200], red[200]]
        }
      ]
    }
  };

  render() {
    const { height, width } = this.props;

    return (
      <Pie
        data={this.state.chartData}
        height={height}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: true,
            text: "Overall Performance",
            fontSize: width === "xs" ? 12 : 18
          }
        }}
      />
    );
  }
}

export default withWidth()(Overall);
