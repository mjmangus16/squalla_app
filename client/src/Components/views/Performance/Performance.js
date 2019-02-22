import React, { Component } from "react";
import {
  Grid,
  Typography,
  IconButton,
  Toolbar,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  withStyles
} from "@material-ui/core";

import InfoButton from "@material-ui/icons/Info";

import Performance from "./Cards/Performance";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "95%",
    maxWidth: 1000,
    margin: "auto"
  }
});

class Friends extends Component {
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
      <div className={classes.root}>
        <Toolbar style={{ marginBottom: 12 }}>
          <Typography variant="h5">Performance</Typography>
          <IconButton onClick={this.handleDialogOpen}>
            <InfoButton />
          </IconButton>
        </Toolbar>
        <Dialog open={dialog} onClose={this.handleDialogClose}>
          <DialogTitle>Performance Info</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Performance is based on how well you play in comparison to your
              skill level. For each round you play, you are given a performance
              score of either +1, 0 or -1. If you beat your personal average for
              that course, your performance score is a +1. Tieing your average
              results in a 0 and playing worse than you average gives you a -1.
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <Grid
          container
          className={classes.gridRoot}
          justify="center"
          spacing={24}
        >
          <Grid item xs={12}>
            <Performance chart="rounds" />
          </Grid>
          <Grid item xs={12}>
            <Performance chart="courses" />
          </Grid>
          <Grid item xs={12}>
            <Performance chart="year" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Friends);
