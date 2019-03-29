import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getUserCourses,
  getFriendsData,
  submitRound,
  getDashboardData,
  clearSubmitRound,
  clearDashboardData
} from "../../../redux/actions/profileActions";
import {
  Toolbar,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  withStyles
} from "@material-ui/core";
import InfoButton from "@material-ui/icons/Info";

import AddRoundStepper from "./AddRoundStepper";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "95%",
    maxWidth: 1000,
    height: "calc(100% - 64px)",
    margin: "auto"
  },
  toolbarHeading: {
    textDecoration: "underline",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25em"
    }
  },
  gridRoot: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 1000,
    margin: "25px auto auto"
  }
});

class AddRound extends Component {
  state = {
    dialog: false
  };

  componentDidMount() {
    this.props.getUserCourses();
    this.props.getFriendsData();
    this.props.getDashboardData();
    this.props.clearSubmitRound();
  }

  componentWillUnmount() {
    this.props.clearDashboardData();
  }

  handleDialogOpen = () => {
    this.setState({ dialog: true });
  };

  handleDialogClose = () => {
    this.setState({ dialog: false });
  };

  render() {
    const { classes } = this.props;
    const { myCourses, friends, submitRound } = this.props.profile;
    const { username } = this.props.auth.user;
    const { dialog } = this.state;
    const { isAuthenticated } = this.props.auth;

    let addRoundWrapper;

    if (!isAuthenticated) {
      addRoundWrapper = null;
    } else {
      addRoundWrapper = (
        <div className={classes.root}>
          <Toolbar style={{ marginBottom: 12 }}>
            <Typography variant="h5" className={classes.toolbarHeading}>
              Add Round
            </Typography>
            <IconButton onClick={this.handleDialogOpen}>
              <InfoButton />
            </IconButton>
          </Toolbar>
          <Dialog open={dialog} onClose={this.handleDialogClose}>
            <DialogTitle>Add Round</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This is where you can add a round to your profile. There are two
                requirements for adding the round. The person that is adding it
                must have already added the course that was played to their
                profile. Any other players that you want to include in the round
                must be on your friends list. Otherwise just follow the steps to
                submit a round!
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <AddRoundStepper
            courses={myCourses}
            friends={friends}
            submitRound={this.props.submitRound}
            user={username}
            success={submitRound}
            getDashboard={this.props.getDashboardData}
            clearSubmitRound={this.props.clearSubmitRound}
          />
        </div>
      );
    }

    return addRoundWrapper;
  }
}

AddRound.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getUserCourses: PropTypes.func.isRequired,
  getFriendsData: PropTypes.func.isRequired,
  submitRound: PropTypes.func.isRequired,
  clearDashboardData: PropTypes.func.isRequired,
  getNotifications: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {
    getUserCourses,
    getFriendsData,
    submitRound,
    getDashboardData,
    clearSubmitRound,
    clearDashboardData
  }
)(withStyles(styles)(AddRound));
