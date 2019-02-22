import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssBaseline, withStyles } from "@material-ui/core";

import { Header, Footer } from "./Layout/index";
import Drawer from "./Layout/Drawer";

import Dashboard from "./views/Dashboard/Dashboard";
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
    drawer: true
  };

  drawerToggle = () => {
    this.setState({ drawer: !this.state.drawer });
  };

  render() {
    const { classes } = this.props;
    const { drawer } = this.state;

    return (
      <Router>
        <Fragment>
          <CssBaseline />
          <Header drawerToggle={this.drawerToggle} />
          <Drawer status={this.state.drawer} />
          <div
            className={
              drawer
                ? classes.contentContainerOpen
                : classes.contentContainerClosed
            }
          >
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/performance" component={Performance} />
            <Route exact path="/rounds" component={Rounds} />
            <Route exact path="/achievements" component={Achievements} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/leagues" component={Leagues} />
            <Route exact path="/addRound" component={AddRound} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
