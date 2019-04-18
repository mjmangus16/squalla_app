import React, { Fragment } from "react";
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

const Rounds = ({ classes, roundsPlayed, recentRounds, newToApp }) => {
  const mockRounds = (
    <Fragment>
      <TableRow>
        <TableCell padding="dense" align="center">
          4/16/19
        </TableCell>
        <TableCell
          padding="dense"
          align="center"
          className={classes.courseName}
        >
          Beaver Island State Park
        </TableCell>
        <TableCell padding="dense" align="center">
          70
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell padding="dense" align="center">
          4/13/19
        </TableCell>
        <TableCell
          padding="dense"
          align="center"
          className={classes.courseName}
        >
          Joseph Davis State Park
        </TableCell>
        <TableCell padding="dense" align="center">
          75
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell padding="dense" align="center">
          4/9/19
        </TableCell>
        <TableCell
          padding="dense"
          align="center"
          className={classes.courseName}
        >
          Beaver Island State Park
        </TableCell>
        <TableCell padding="dense" align="center">
          71
        </TableCell>
      </TableRow>
    </Fragment>
  );

  return (
    <Card className={classes.card}>
      <CardHeader
        title={newToApp ? "Rounds (Mock Data)" : "Rounds"}
        subheader={
          newToApp ? "8 Rounds Played" : `${roundsPlayed} Rounds Played`
        }
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
            {newToApp
              ? mockRounds
              : recentRounds.map(round => (
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
