import React, { Component } from "react";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
  CardHeader
} from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    width: "100%",
    height: "auto"
  },
  content: {
    width: "100%",
    margin: "auto"
  },
  cell: {
    width: 100
  }
});

class Round extends Component {
  render() {
    const { classes, success } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader title="Round Added!" subheader={success.course} />
        <CardContent className={classes.content}>
          <Table padding="dense">
            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.cell}>
                  Date
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  Owner
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  League
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  Score
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.cell}>
                  {success.date}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  {success.owner}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  {success.league ? success.league : "Non-League"}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  {success.score}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Round);

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
