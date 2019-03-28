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
import { cyan } from "@material-ui/core/colors";

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
                <TableCell
                  align="center"
                  className={classes.cell}
                  style={{ color: cyan[200] }}
                >
                  {success.date}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.cell}
                  style={{ color: cyan[200] }}
                >
                  {success.owner}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.cell}
                  style={{ color: cyan[200] }}
                >
                  {success.league ? success.league : "Non-League"}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.cell}
                  style={{ color: cyan[200] }}
                >
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
