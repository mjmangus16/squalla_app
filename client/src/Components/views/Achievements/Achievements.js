import React, { Component } from "react";
import {
  Grid,
  Typography,
  IconButton,
  Toolbar,
  withStyles
} from "@material-ui/core";
import InfoButton from "@material-ui/icons/Info";

import Stats from "./Cards/Stats";
import Recent from "./Cards/Recent";
import PointsChart from "./Cards/PointsChart";
import Achieves from "./Cards/Achieves";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "95%",
    maxWidth: 1000,
    margin: "auto"
  }
});

class Achievements extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Toolbar style={{ marginBottom: 12 }}>
          <Typography variant="h5">Achievements</Typography>
          <IconButton>
            <InfoButton />
          </IconButton>
        </Toolbar>
        <Grid container justify="center" spacing={24}>
          <Grid item xs={4}>
            <Stats />
          </Grid>
          <Grid item xs={8}>
            <Recent />
          </Grid>
          <Grid item xs={12}>
            <PointsChart chart="line" />
          </Grid>
          <Grid item xs={12}>
            <PointsChart chart="bar" />
          </Grid>
          <Grid item xs={12}>
            <Achieves />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Achievements);
