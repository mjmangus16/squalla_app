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
import InfoButton from "@material-ui/icons/Info";

import HistoryInfo from "./HistoryInfo";

const styles = theme => ({
  card: {
    width: "100%",
    height: 500
  },
  tableWrapper: {
    overflowX: "auto",
    paddingTop: 0
  },
  table: {
    minWidth: 400
  },
  cellPadding: {
    paddingLeft: 10,
    paddingRight: 10
  }
});

class History extends Component {
  state = {
    dialog: false
  };

  handleDialogOpen = () => {
    this.setState({ dialog: true });
  };

  handleDialogClose = () => {
    this.setState({ dialog: false });
  };
  render() {
    const { classes } = this.props;
    const { dialog } = this.state;
    return (
      <Card className={classes.card}>
        <HistoryInfo dialogOpen={dialog} dialogClose={this.handleDialogClose} />
        <CardHeader title="History" />
        <CardContent className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.cellPadding}>
                  Date
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  Course
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  Score
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  Experience
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  Info
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ overflow: "Scroll" }}>
              <TableRow>
                <TableCell align="center" className={classes.cellPadding}>
                  2/9/18
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  Joseph Davis State Park
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  79
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  145
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  <IconButton onClick={this.handleDialogOpen}>
                    <InfoButton />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.cellPadding}>
                  2/9/18
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  Joseph Davis State Park
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  79
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  145
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  <IconButton onClick={this.handleDialogOpen}>
                    <InfoButton />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.cellPadding}>
                  2/9/18
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  Joseph Davis State Park
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  79
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  145
                </TableCell>
                <TableCell align="center" className={classes.cellPadding}>
                  <IconButton onClick={this.handleDialogOpen}>
                    <InfoButton />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(History);
