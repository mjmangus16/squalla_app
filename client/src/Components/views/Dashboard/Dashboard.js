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

import Achievements from "./Cards/Achievements";
import Courses from "./Cards/Courses";
import Friends from "./Cards/Friends";
import Performance from "./Cards/Performance";
import Rounds from "./Cards/Rounds";
import Level from "./Cards/Level";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "95%",
    maxWidth: 1000,
    margin: "auto"
  }
});

class Dashboard extends Component {
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
          <Typography variant="h5">Dashboard</Typography>
          <IconButton onClick={this.handleDialogOpen}>
            <InfoButton />
          </IconButton>
        </Toolbar>
        <Dialog open={dialog} onClose={this.handleDialogClose}>
          <DialogTitle>Dashboard Info</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              The Dashboard provides a quick snapshot of some of the stats being
              tracked. To learn more about the available data, navigate to that
              page.
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <Grid container justify="center" spacing={24}>
          <Grid item xs={12}>
            <Level />
          </Grid>
          <Grid item xs={12}>
            <Performance />
          </Grid>
          <Grid item xs={12} md={6}>
            <Rounds />
          </Grid>
          <Grid item xs={12} md={6}>
            <Courses />
          </Grid>
          <Grid item xs={12} md={6}>
            <Achievements />
          </Grid>
          <Grid item xs={12} md={6}>
            <Friends />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
