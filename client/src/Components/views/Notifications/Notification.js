import React, { Component } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Toolbar,
  Fab,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  withStyles
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/ClearAll";
import InfoButton from "@material-ui/icons/Info";

import Round from "./Cards/Round";
import Other from "./Cards/Other";

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
  },
  fab: {
    margin: "auto 0 auto auto",
    float: "right"
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      margin: "auto"
    }
  },
  fabText: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }
});

class Notifications extends Component {
  state = {
    dialog: false
  };

  componentDidMount() {
    this.props.getNotifications();
  }

  handleDialogOpen = () => {
    this.setState({ dialog: true });
  };

  handleDialogClose = () => {
    this.setState({ dialog: false });
  };
  render() {
    const {
      classes,
      notifications,
      clearAllNotifications,
      isAuthenticated
    } = this.props;
    const { dialog } = this.state;

    let notificationsWrapper;
    let notificationsContent = [];
    let roundsContent;
    // let checkinsContent;
    let otherContent;

    if (notifications) {
      if (Object.keys(notifications).length > 0) {
        if (
          notifications.rounds.length === 0 &&
          notifications.checkins.length === 0 &&
          notifications.other.length === 0
        ) {
          notificationsContent.push(
            <Grid item xs={12} key="0Notifications">
              <Card>
                <CardContent>
                  <Typography
                    align="center"
                    variant="display1"
                    style={{ fontSize: "1.15em" }}
                  >
                    You do not have any notifications
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        } else {
          if (notifications.rounds.length > 0) {
            roundsContent = notifications.rounds.map(round => (
              <Grid
                item
                xs={12}
                md={6}
                key={`rounds_${notifications.rounds.indexOf(round)}`}
              >
                <Round success={round} />
              </Grid>
            ));
          }
          if (notifications.other.length > 0) {
            otherContent = notifications.other.map(other => (
              <Grid
                item
                xs={12}
                md={6}
                key={`other_${notifications.other.indexOf(other)}`}
              >
                <Other success={other} />
              </Grid>
            ));
          }
        }
      }
    }
    notificationsContent = notificationsContent.concat(
      roundsContent,
      otherContent
    );

    if (!isAuthenticated) {
      notificationsWrapper = null;
    } else {
      notificationsWrapper = (
        <div className={classes.root}>
          <Toolbar style={{ marginBottom: 12 }}>
            <Typography variant="h5" className={classes.toolbarHeading}>
              Notifications
            </Typography>
            <IconButton onClick={this.handleDialogOpen}>
              <InfoButton />
            </IconButton>
            <Fab
              color="secondary"
              size="small"
              variant="extended"
              aria-label="Add"
              className={classes.fab}
              onClick={clearAllNotifications}
            >
              <ClearIcon className={classes.extendedIcon} />
              <span className={classes.fabText}>Clear Notifications</span>
            </Fab>
          </Toolbar>
          <Dialog open={dialog} onClose={this.handleDialogClose}>
            <DialogTitle>Notifications</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This is where you will be alerted when a round has been added to
                your profile.
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <Grid container justify="center" spacing={16}>
            {notificationsContent}
          </Grid>
        </div>
      );
    }

    return notificationsWrapper;
  }
}

export default withStyles(styles)(Notifications);
