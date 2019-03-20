import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  withStyles
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { blue } from "@material-ui/core/colors";

import HistoryInfo from "./HistoryInfo";

const styles = theme => ({
  card: {
    width: "100%",
    height: 500
  },
  cardContent: {
    overflow: "auto",
    paddingTop: 0
  },
  tableContainer: {
    minWidth: 400,
    position: "relative",
    width: "100%"
  },
  table: {
    [theme.breakpoints.up("sm")]: {
      width: "calc(100% - 15px)"
    }
  },
  cellPadding: {
    paddingLeft: 10,
    paddingRight: 10
  }
});

class History extends Component {
  state = {
    dialog: false,
    round: {
      date: "",
      course: "",
      tees: "",
      owner: "",
      league: "",
      scores: []
    }
  };

  handleDialogOpen = round => {
    this.setState({ dialog: true, round: round });
  };

  handleDialogClose = () => {
    this.setState({
      dialog: false
    });
  };
  render() {
    const { classes, data, username } = this.props;
    const { dialog, round } = this.state;

    const historyContent = data.map(myRound => (
      <TableRow key={data.indexOf(myRound)}>
        <TableCell
          padding="dense"
          align="center"
          className={classes.cellPadding}
        >
          {myRound.date}
        </TableCell>
        <TableCell
          padding="dense"
          align="center"
          className={classes.cellPadding}
        >
          {myRound.course}
        </TableCell>
        <TableCell
          padding="dense"
          align="center"
          className={classes.cellPadding}
        >
          {getScore(myRound, username)}
        </TableCell>
        <TableCell
          padding="dense"
          align="center"
          className={classes.cellPadding}
        >
          {getExperience(myRound, username)}
        </TableCell>
        <TableCell
          padding="dense"
          align="center"
          className={classes.cellPadding}
        >
          <IconButton onClick={() => this.handleDialogOpen(myRound)}>
            <InfoIcon style={{ color: blue[400] }} />
          </IconButton>
        </TableCell>
      </TableRow>
    ));
    return (
      <Card className={classes.card}>
        <HistoryInfo
          dialogOpen={dialog}
          dialogClose={this.handleDialogClose}
          data={round}
        />
        <CardHeader
          title="History"
          subheader={`${data.length} Rounds Played`}
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.tableContainer}>
            <Table className={classes.table} style={{ tableLayout: "fixed" }}>
              <TableHead>
                <TableRow>
                  <TableCell
                    padding="dense"
                    align="center"
                    className={classes.cellPadding}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    padding="dense"
                    align="center"
                    className={classes.cellPadding}
                  >
                    Course
                  </TableCell>
                  <TableCell
                    padding="dense"
                    align="center"
                    className={classes.cellPadding}
                  >
                    Score
                  </TableCell>
                  <TableCell
                    padding="dense"
                    align="center"
                    className={classes.cellPadding}
                  >
                    Experience
                  </TableCell>
                  <TableCell
                    padding="dense"
                    align="center"
                    className={classes.cellPadding}
                  >
                    More Info
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
            <div style={{ overflow: "auto", height: 350 }}>
              <Table style={{ tableLayout: "fixed" }}>
                <TableBody style={{ overflow: "hidden" }}>
                  {historyContent}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(History);

const getScore = (round, username) => {
  let data;

  for (let i = 0; i < round.scores.length; i++) {
    if (round.scores[i].username === username) {
      data = round.scores[i].score;
    }
  }
  return data;
};

const getExperience = (round, username) => {
  let data;

  for (let i = 0; i < round.scores.length; i++) {
    if (round.scores[i].username === username) {
      data = round.scores[i].experience;
    }
  }
  return data;
};
