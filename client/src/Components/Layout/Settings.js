import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {} from "../../redux/actions/profileActions";
import { Dialog, DialogTitle, withStyles } from "@material-ui/core";

const styles = theme => ({});

class Settings extends Component {
  render() {
    const { settings, settingsHandler } = this.props;
    return (
      <Dialog open={settings} onClose={settingsHandler}>
        <DialogTitle>TEST</DialogTitle>
      </Dialog>
    );
  }
}

Settings.propTypes = {};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(Settings));
