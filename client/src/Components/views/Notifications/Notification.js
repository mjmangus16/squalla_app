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

    let notificationsArray = [];
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
              <Card raised>
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
          for (let i = 0; i < notifications.rounds.length; i++) {
            notifications.rounds[i].data = {
              date: notifications.rounds[i].date
            };
          }
          notificationsArray = notificationsArray.concat(
            notifications.rounds,
            notifications.other
          );

          notificationsArray.sort((a, b) => {
            return new Date(b.data.date) - new Date(a.data.date);
          });

          if (notificationsArray.length > 0) {
            for (let i = 0; i < notificationsArray.length; i++) {
              if (notificationsArray[i].type) {
                notificationsContent.push(
                  <Grid
                    item
                    xs={12}
                    md={6}
                    key={`other_${notificationsArray.indexOf(
                      notificationsArray[i]
                    )}`}
                  >
                    <Other success={notificationsArray[i]} />
                  </Grid>
                );
              } else {
                notificationsContent.push(
                  <Grid
                    item
                    xs={12}
                    md={6}
                    key={`rounds_${notificationsArray.indexOf(
                      notificationsArray[i]
                    )}`}
                  >
                    <Round success={notificationsArray[i]} />
                  </Grid>
                );
              }
            }
          }
        }
      }
    }

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
