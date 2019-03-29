import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/authActions";
import {
  clearCurrentProfile,
  getNotifications,
  clearAllNotifications
} from "../redux/actions/profileActions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssBaseline, withStyles } from "@material-ui/core";

import { Header } from "./Layout/index";
import Drawer from "./Layout/Drawer";

import Register from "./Auth/Register";
import Login from "./Auth/Login";

import Dashboard from "./views/Dashboard/Dashboard";
import Notifications from "./views/Notifications/Notification";
import Performance from "./views/Performance/Performance";
import Rounds from "./views/Rounds/Rounds";
import Achievements from "./views/Achievements/Achievements";
import AddRound from "./views/AddRound/AddRound";
import Courses from "./views/Courses/Courses";
import Friends from "./views/Friends/Friends";
import Leagues from "./views/Leagues/Leagues";

const styles = theme => ({
  contentContainerOpen: {
    marginTop: 76,
    height: "calc(100% - 64px)",
    [theme.breakpoints.up("xs")]: {
      marginLeft: 225
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 55
    }
  },
  contentContainerClosed: {
    marginTop: 76,
    height: "calc(100% - 64px)",
    marginLeft: 0
  }
});

class App extends Component {
  state = {
    drawer: false,
    drawerExpand: true,
    login: false,
    register: this.props.auth.isAuthenticated ? false : true
  };

  componentDidMount() {
    this.props.getNotifications();
  }

  drawerToggle = () => {
    this.setState({ drawer: !this.state.drawer });
  };

  drawerExpandHandler = () => {
    this.setState({ drawerExpand: !this.state.drawerExpand });
  };

  loginToggle = () => {
    this.setState({ login: !this.state.login, register: false });
  };

  registerToggle = () => {
    this.setState({ register: !this.state.register, login: false });
  };

  logoutUserHandler = () => {
    this.props.logoutUser();
    this.props.clearCurrentProfile();
  };

  render() {
    const { classes } = this.props;
    const { drawer, login, register, drawerExpand } = this.state;
    const { isAuthenticated } = this.props.auth;
    const { username } = this.props.auth.user;
    const { notifications } = this.props.profile;

    return (
      <Router>
        <Fragment>
          <CssBaseline />
          <Login
            open={login}
            close={this.loginToggle}
            register={this.registerToggle}
          />
          <Register
            open={register}
            close={this.registerToggle}
            login={this.loginToggle}
          />
          <Header drawerToggle={this.drawerToggle} />
          <Drawer
            status={this.state.drawer}
            auth={isAuthenticated}
            registerHandler={this.registerToggle}
            loginHandler={this.loginToggle}
            logout={this.logoutUserHandler}
            username={username}
            notifications={notifications}
            drawerExpandStatus={drawerExpand}
            drawerExpandHandler={this.drawerExpandHandler}
          />
          <div
            className={
              drawer
                ? classes.contentContainerOpen
                : classes.contentContainerClosed
            }
          >
            <Route exact path="/dashboard" component={Dashboard} />
            <Route
              exact
              path="/notifications"
              component={() => (
                <Notifications
                  notifications={notifications}
                  clearAllNotifications={this.props.clearAllNotifications}
                  getNotifications={this.props.getNotifications}
                  isAuthenticated={isAuthenticated}
                />
              )}
            />
            <Route exact path="/performance" component={Performance} />
            <Route exact path="/rounds" component={Rounds} />
            <Route exact path="/achievements" component={Achievements} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/friends" component={Friends} />
            <Route
              exact
              path="/leagues"
              component={() => <Leagues isAuthenticated={isAuthenticated} />}
            />
            <Route exact path="/addRound" component={AddRound} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

App.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
  getNotifications: PropTypes.func.isRequired,
  clearAllNotifications: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile, getNotifications, clearAllNotifications }
)(withStyles(styles)(App));
