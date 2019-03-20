import React, { Component } from "react";
import {
  Grid,
  Toolbar,
  IconButton,
  Typography,
  Card,
  CardContent,
  withStyles
} from "@material-ui/core";
import InfoButton from "@material-ui/icons/Info";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "95%",
    maxWidth: 1000,
    margin: "auto"
  },
  toolbarHeading: {
    textDecoration: "underline",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25em"
    }
  }
});

class Leagues extends Component {
  render() {
    const { classes, isAuthenticated } = this.props;

    let leaguesWrapper;

    if (!isAuthenticated) {
      leaguesWrapper = null;
    } else {
      leaguesWrapper = (
        <div className={classes.root}>
          <Toolbar style={{ marginBottom: 12 }}>
            <Typography variant="h5" className={classes.toolbarHeading}>
              Leagues
            </Typography>
            <IconButton onClick={this.handleDialogOpen}>
              <InfoButton />
            </IconButton>
          </Toolbar>

          <Grid container justify="center" spacing={8}>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    align="center"
                    variant="display1"
                    style={{ fontSize: "1.15em" }}
                  >
                    Leagues are not yet available.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      );
    }

    return leaguesWrapper;
  }
}

export default withStyles(styles)(Leagues);
