import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRoundsData } from "../../../redux/actions/profileActions";
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

import History from "./Cards/History";
import Year from "./Cards/Year";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "95%",
    maxWidth: 1000,
    margin: "auto"
  },
  toolbarHeading: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25em"
    }
  }
});

class Rounds extends Component {
  state = {
    dialog: false
  };

  componentDidMount() {
    this.props.getRoundsData();
  }

  handleDialogOpen = () => {
    this.setState({ dialog: true });
  };

  handleDialogClose = () => {
    this.setState({ dialog: false });
  };

  render() {
    const { classes } = this.props;
    const { rounds } = this.props.profile;
    const { username } = this.props.auth.user;
    const { dialog } = this.state;
    const { isAuthenticated } = this.props.auth;

    let roundsWrapper;
    let roundsContent;
    if (!rounds) {
      roundsContent = null;
    } else {
      if (Object.keys(rounds).length > 0) {
        roundsContent = (
          <div className={classes.root}>
            <Toolbar style={{ marginBottom: 12 }}>
              <Typography variant="h5" className={classes.toolbarHeading}>
                Rounds
              </Typography>
              <IconButton onClick={this.handleDialogOpen}>
                <InfoButton />
              </IconButton>
            </Toolbar>
            <Dialog open={dialog} onClose={this.handleDialogClose}>
              <DialogTitle>Rounds Info</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Rounds is just an easy way to view any past rounds you have
                  played. This includes the scores for everyone that was
                  involved in the round.
                </DialogContentText>
              </DialogContent>
            </Dialog>
            <Grid container justify="center" spacing={8}>
              <Grid item xs={12}>
                <Year data={rounds.roundsPlayedPerMonth} />
              </Grid>
              <Grid item xs={12}>
                <History data={rounds.roundsHistory} username={username} />
              </Grid>
            </Grid>
          </div>
        );
      }
    }

    if (!isAuthenticated) {
      roundsWrapper = null;
    } else {
      roundsWrapper = roundsContent;
    }

    return roundsWrapper;
  }
}

Rounds.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getRoundsData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getRoundsData }
)(withStyles(styles)(Rounds));
