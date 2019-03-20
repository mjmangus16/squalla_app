import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  card: {
    width: "100%",
    height: "100%"
  },
  tableWrapper: {
    overflowX: "auto",
    paddingTop: 0
  },
  table: {
    position: "relative",
    width: "100%"
  },
  headerTitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.15em"
    }
  },
  subheader: {
    [theme.breakpoints.down("xs")]: {
      fontSize: ".75em"
    }
  }
});

const Rounds = ({ classes, roundsPlayed, recentRounds }) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        title="Rounds"
        subheader={`${roundsPlayed} Rounds Played`}
        classes={{
          title: classes.headerTitle,
          subheader: classes.subheader
        }}
      />
      <CardContent className={classes.tableWrapper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell padding="dense" align="center">
                Date
              </TableCell>
              <TableCell padding="dense" align="center">
                Course
              </TableCell>
              <TableCell padding="dense" align="center">
                Score
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ overflow: "Scroll" }}>
            {recentRounds.map(round => (
              <TableRow key={recentRounds.indexOf(round)}>
                <TableCell padding="dense" align="center">
                  {round.date}
                </TableCell>
                <TableCell
                  padding="dense"
                  align="center"
                  className={classes.courseName}
                >
                  {round.course}
                </TableCell>
                <TableCell padding="dense" align="center">
                  {round.score}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Rounds);

// const reduceCourseName = name => {
//   if (name.length > 15) {
//     return name.substring(0, 15) + "..";
//   } else {
//     return name.substring(0, 15);
//   }
// };
