import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  withStyles
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const getExperiencePercent = (exp, lvl) => {
  const getPercent = (min, max) => {
    if (exp > max) {
      return getExperiencePercent(exp, parseInt(lvl + 1));
    } else {
      let total = max - min;
      let total2 = exp - min;

      let sum = (total2 * 100) / total;
      return Math.floor(sum);
    }
  };

  switch (lvl) {
    case 1:
      return getPercent(0, 50);
    case 2:
      return getPercent(50, 150);
    case 3:
      return getPercent(150, 400);
    case 4:
      return getPercent(400, 750);
    case 5:
      return getPercent(750, 1200);
    case 6:
      return getPercent(1200, 1750);
    case 7:
      return getPercent(1750, 2400);
    case 8:
      return getPercent(2400, 3150);
    case 9:
      return getPercent(3150, 4000);
    case 10:
      return getPercent(4000, 4950);
    case 11:
      return getPercent(4950, 6000);
    case 12:
      return getPercent(6000, 7150);
    case 13:
      return getPercent(7150, 8400);
    case 14:
      return getPercent(8400, 9750);
    case 15:
      return getPercent(9750, 11200);
    case 16:
      return getPercent(11200, 12750);
    case 17:
      return getPercent(12750, 14400);
    case 18:
      return getPercent(14400, 16150);
    case 19:
      return getPercent(16150, 18000);
    case 20:
      return getPercent(18000, 19950);
    default:
      return 0;
  }
};

const styles = theme => ({
  card: {
    width: "100%",
    height: "100%"
  },
  progressBar: {
    backgroundColor: grey[400],
    height: 20,
    width: "75%",
    margin: "auto"
  }
});

class Level extends Component {
  state = {
    completed: getExperiencePercent(this.props.experience, this.props.level)
  };

  render() {
    const { classes, level } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            style={{ textAlign: "center" }}
          >
            {`Level: ${level}`}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={this.state.completed}
            className={classes.progressBar}
            color="secondary"
          />
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Level);
