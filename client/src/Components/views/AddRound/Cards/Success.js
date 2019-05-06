import React, { Component } from "react";
import {
  Card,
  CardContent,
  LinearProgress,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
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
  root: {
    flexGrow: 1
  },
  card: {
    width: "100%",
    height: "100%",
    marginBottom: 12
  },
  progressBar: {
    backgroundColor: grey[400],
    height: 20,
    width: "75%",
    margin: "auto"
  },
  content: {
    width: "50%",
    margin: "auto",
    overflow: "auto",
    maxWidth: 450,
    [theme.breakpoints.down("sm")]: {
      width: "auto"
    }
  },
  cell: {
    width: 100,
    [theme.breakpoints.down("sm")]: {
      width: 50,
      padding: 5
    }
  }
});

class Success extends Component {
  state = {
    before: getExperiencePercent(
      this.props.success.originalExp,
      this.props.success.oldLevel
    ),
    after: getExperiencePercent(
      this.props.success.originalExp + this.props.success.gainedExp,
      this.props.success.newLevel
    )
  };

  oldLevel = this.props.success.oldLevel;
  newLevel = this.props.success.newLevel;

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { before, after } = this.state;
    if (before === 100) {
      this.oldLevel++;
      this.setState({ before: 0 });
    } else {
      let diff = 5;
      if (this.oldLevel < this.newLevel) {
        this.setState({ before: Math.min(before + diff, 100) });
      } else if (this.oldLevel === this.newLevel) {
        if (before <= after) {
          if (after - before < 10) {
            diff = 2;
          }
          this.setState({ before: Math.min(before + diff, 100) });
        }
      }
    }
  };

  render() {
    const { classes, success } = this.props;
    return (
      <Card raised className={classes.card}>
        <CardContent className={classes.root}>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            style={{ textAlign: "center" }}
          >
            {`Level: ${this.oldLevel}`}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={this.state.before}
            className={classes.progressBar}
            color="secondary"
          />
        </CardContent>
        <CardContent className={classes.content}>
          <Table padding="dense">
            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.cell}>
                  Beat Average
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  Beat Best
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.cell}>
                  {success.score < success.average ? "YES!" : "NO"}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  {success.score < success.best ? "YES!" : "NO"}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardContent className={classes.content}>
          <Table padding="dense">
            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.cell}>
                  Achievements Earned
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  Achievement Points
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  Performance
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.cell}>
                  {success.achievements}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  {success.achievePoints}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  {success.performance > -0.5
                    ? `+${success.performance}`
                    : success.performance}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Success);
