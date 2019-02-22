import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";

const styles = theme => ({
  gridRoot: {
    flexGrow: 1,
    width: "90%",
    maxWidth: 1000,
    margin: "auto"
  }
});

class AddRound extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.gridRoot}
        justify="center"
        spacing={24}
      >
        <Grid item xs={6} />
        <Grid item xs={6} />
        <Grid item xs={12} />
      </Grid>
    );
  }
}

export default withStyles(styles)(AddRound);
