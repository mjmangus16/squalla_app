import React, { Component } from "react";
import {
  Grid,
  Typography,
  IconButton,
  Toolbar,
  withStyles
} from "@material-ui/core";
import InfoButton from "@material-ui/icons/Info";

import History from "./Cards/History";
import Year from "./Cards/Year";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "95%",
    maxWidth: 1000,
    margin: "auto"
  }
});

class Rounds extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Toolbar style={{ marginBottom: 12 }}>
          <Typography variant="h5">Rounds</Typography>
          <IconButton>
            <InfoButton />
          </IconButton>
        </Toolbar>
        <Grid container justify="center" spacing={24}>
          <Grid item xs={12}>
            <Year />
          </Grid>
          <Grid item xs={12}>
            <History />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Rounds);
