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
    height: "100%",
    marginBottom: 10
  },
  content: {
    width: "50%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
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

const Summary = ({ classes, summary }) => {
  let summaryContent;

  if (!summary) {
    summaryContent = null;
  } else {
    if (Object.keys(summary).length > 0) {
      summaryContent = (
        <Fragment>
          <CardHeader
            title={summary.course ? summary.course.name : null}
            subheader={
              summary.course
                ? `${summary.course.city}, ${summary.course.state}`
                : null
            }
            className={classes.content}
          />
          <CardContent className={classes.content}>
            <Table padding="dense">
              <TableHead>
                <TableRow>
                  <TableCell align="center" className={classes.cell}>
                    Date
                  </TableCell>
                  <TableCell align="center" className={classes.cell}>
                    Tees
                  </TableCell>
                  <TableCell align="center" className={classes.cell}>
                    League
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center" className={classes.cell}>
                    {summary.date}
                  </TableCell>
                  <TableCell align="center" className={classes.cell}>
                    {summary.tee}
                  </TableCell>
                  <TableCell align="center" className={classes.cell}>
                    {summary.league ? summary.league : "Non-League"}
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
                    Player
                  </TableCell>
                  <TableCell align="center" className={classes.cell}>
                    Score
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {summary.players.map(player => (
                  <TableRow key={player.player}>
                    <TableCell align="center" className={classes.cell}>
                      {player.player}
                    </TableCell>
                    <TableCell align="center" className={classes.cell}>
                      {player.score}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Fragment>
      );
    } else {
      summaryContent = null;
    }
  }

  return <Card className={classes.card}>{summaryContent}</Card>;
};

export default withStyles(styles)(Summary);
