import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPerformanceData } from "../../../redux/actions/profileActions";
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

import PerformanceCard from "./Cards/Performance";

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

class Performance extends Component {
  state = {
    dialog: false
  };

  componentDidMount() {
    this.props.getPerformanceData();
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
    const { isAuthenticated } = this.props.auth;

    let performanceWrapper;

    if (!isAuthenticated) {
      performanceWrapper = null;
    } else {
      performanceWrapper = (
        <div className={classes.root}>
          <Toolbar style={{ marginBottom: 12 }}>
            <Typography variant="h5" className={classes.toolbarHeading}>
              Performance
            </Typography>
            <IconButton onClick={this.handleDialogOpen}>
              <InfoButton />
            </IconButton>
          </Toolbar>
          <Dialog open={dialog} onClose={this.handleDialogClose}>
            <DialogTitle>Performance Info</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Performance gives you a visual on the rate at which you are
                improving your game. Performance is based on your own personal
                skill level.
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <Grid
            container
            className={classes.gridRoot}
            justify="center"
            spacing={8}
          >
            <Grid item xs={12}>
              <PerformanceCard chart="rounds" />
            </Grid>
            <Grid item xs={12}>
              <PerformanceCard chart="courses" />
            </Grid>
            <Grid item xs={12}>
              <PerformanceCard chart="year" />
            </Grid>
          </Grid>
        </div>
      );
    }

    return performanceWrapper;
  }
}

Performance.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getPerformanceData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getPerformanceData }
)(withStyles(styles)(Performance));
