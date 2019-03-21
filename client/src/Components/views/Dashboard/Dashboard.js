import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDashboardData } from "../../../redux/actions/profileActions";
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
  },
  toolbarHeading: {
    textDecoration: "underline",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25em"
    }
  }
});

class Dashboard extends Component {
  state = {
    dialog: false
  };

  componentDidMount() {
    this.props.getDashboardData();
  }

  handleDialogOpen = () => {
    this.setState({ dialog: true });
  };

  handleDialogClose = () => {
    this.setState({ dialog: false });
  };

  render() {
    const { classes } = this.props;
    const { dialog } = this.state;
    const { dashboard } = this.props.profile;
    const { isAuthenticated } = this.props.auth;

    let dashboardWrapper;
    let dashboardContent;

    if (!dashboard) {
      dashboardContent = null;
    } else {
      if (Object.keys(dashboard).length > 0) {
        dashboardContent = (
          <div className={classes.root}>
            <Toolbar style={{ marginBottom: 12 }}>
              <Typography variant="h5" className={classes.toolbarHeading}>
                Dashboard
              </Typography>
              <IconButton onClick={this.handleDialogOpen}>
                <InfoButton />
              </IconButton>
            </Toolbar>
            <Dialog open={dialog} onClose={this.handleDialogClose}>
              <DialogTitle>Dashboard</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  The Dashboard provides a quick snapshot of your profile. To
                  learn more about the stats being tracked on the dashboard,
                  visit that page.
                </DialogContentText>
              </DialogContent>
            </Dialog>
            <Grid container justify="center" spacing={8}>
              <Grid item xs={12}>
                <Level
                  level={dashboard.level}
                  experience={dashboard.experience}
                />
              </Grid>
              <Grid item xs={12}>
                <Performance
                  performance={dashboard.performancePointsPerRound}
                  rating={dashboard.performanceRating}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Rounds
                  roundsPlayed={dashboard.roundsPlayed}
                  recentRounds={dashboard.recentRounds}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Courses
                  coursesPlayed={dashboard.coursesPlayed}
                  roundsPerCourse={dashboard.roundsPerCourse}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Achievements
                  points={dashboard.achievementPoints}
                  pointsPerRound={dashboard.achievementPointsPerRound}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Friends
                  friends={dashboard.totalFriends}
                  roundsPerFriend={dashboard.roundsPerFriend}
                />
              </Grid>
            </Grid>
          </div>
        );
      }
    }

    if (!isAuthenticated) {
      dashboardWrapper = null;
    } else {
      dashboardWrapper = dashboardContent;
    }

    return dashboardWrapper;
  }
}

Dashboard.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getDashboardData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getDashboardData }
)(withStyles(styles)(Dashboard));
