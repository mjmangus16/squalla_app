import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAchievementsData } from "../../../redux/actions/profileActions";
import {
  Grid,
  Paper,
  Typography,
  IconButton,
  Toolbar,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Tabs,
  Tab,
  withStyles
} from "@material-ui/core";
import InfoButton from "@material-ui/icons/Info";
import { grey } from "@material-ui/core/colors";

import PointsChart from "./Cards/PointsChart";
import Achieves from "./Cards/Achieves";

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
  tabs: {
    flexGrow: 1,
    backgroundColor: grey[900],
    marginBottom: 10
  }
});

class Achievements extends Component {
  state = {
    dialog: false,
    tabValue: 0
  };

  componentDidMount() {
    this.props.getAchievementsData();
  }

  handleChange = (event, value) => {
    this.setState({ tabValue: value });
  };

  handleDialogOpen = () => {
    this.setState({ dialog: true });
  };

  handleDialogClose = () => {
    this.setState({ dialog: false });
  };

  render() {
    const { classes } = this.props;
    const { achievements } = this.props.profile;
    const { dialog, stats, achievementsList, tabValue } = this.state;
    const { isAuthenticated } = this.props.auth;

    let achievementWrapper;
    let achievementContent;

    if (!achievements) {
      achievementContent = null;
    } else {
      if (Object.keys(achievements).length > 0) {
        if (tabValue === 1) {
          achievementContent = (
            <Grid container justify="center" spacing={8}>
              <Grid item xs={12}>
                <Achieves data={achievements.achievements} />
              </Grid>
            </Grid>
          );
        } else if (tabValue === 0) {
          achievementContent = (
            <Grid container justify="center" spacing={8}>
              <Grid item xs={12}>
                <PointsChart
                  chart="rounds"
                  data={achievements.pointsEarnedPerRound}
                />
              </Grid>
              <Grid item xs={12}>
                <PointsChart
                  chart="month"
                  data={achievements.pointsEarnedPerMonth}
                />
              </Grid>
            </Grid>
          );
        }
      }
    }

    if (!isAuthenticated) {
      achievementWrapper = null;
    } else {
      achievementWrapper = (
        <div className={classes.root}>
          <Toolbar style={{ marginBottom: 12 }}>
            <Typography variant="h5" className={classes.toolbarHeading}>
              Achievements
            </Typography>
            <IconButton onClick={this.handleDialogOpen}>
              <InfoButton />
            </IconButton>
          </Toolbar>
          <Dialog open={dialog} onClose={this.handleDialogClose}>
            <DialogTitle>Achievements Info</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                There are several achievements you can earn simply by playing
                disc golf and using the app. The "Achievements" section lists
                all the achievements you can and have earned. The "Stats"
                section gives you some stats on the achievements you have
                earned.
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <Paper className={classes.tabs}>
            <Tabs
              value={tabValue}
              onChange={this.handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="STATS" />
              <Tab label="ACHIEVEMENTS" />
            </Tabs>
          </Paper>
          {achievementContent}
        </div>
      );
    }

    return achievementWrapper;
  }
}

Achievements.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getAchievementsData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getAchievementsData }
)(withStyles(styles)(Achievements));
