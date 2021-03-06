import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getFriendsData,
  getUserByName,
  clearFoundUser,
  addFriend
} from "../../../redux/actions/profileActions";
import {
  Grid,
  Toolbar,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Paper,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  withStyles
} from "@material-ui/core";
import InfoButton from "@material-ui/icons/Info";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { grey } from "@material-ui/core/colors";

import MyFriend from "./Cards/MyFriend";
import RoundsPlayed from "./Cards/roundsPlayed";
import FriendDialog from "./Cards/FriendDialog";
import FindFriends from "./FindFriends";
import AddFriendDialog from "./Cards/AddFriendDialog";

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
  gridWrapper: {
    marginTop: 12,
    position: "relative"
  },
  grid: {
    minHeight: 200,
    maxHeight: "76vh"
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: 0
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    },
    [theme.breakpoints.down("xs")]: {
      width: 150
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing.unit
    }
  },
  tabs: {
    flexGrow: 1,
    backgroundColor: grey[900],
    marginBottom: 10
  }
});

class Friends extends Component {
  state = {
    tabValue: 0,
    friendOpen: false,
    addFriendOpen: false,
    dialog: false
  };

  componentDidMount() {
    this.props.getFriendsData();
  }

  handleDialogOpen = () => {
    this.setState({ dialog: true });
  };

  handleDialogClose = () => {
    this.setState({ dialog: false });
  };

  handleTabChange = (event, value) => {
    this.setState({ tabValue: value });
    if (value === 0) {
      this.props.getFriendsData();
    }
  };

  getUser = user => {
    const data = {
      name: user
    };
    this.props.getUserByName(data);
  };

  openFriendDialog = () => {
    this.setState({ friendOpen: true, addFriendOpen: false });
  };

  closeFriendDialog = () => {
    this.setState({ friendOpen: false });
    this.props.clearFoundUser();
  };

  openAddFriendDialog = () => {
    this.setState({ friendOpen: false, addFriendOpen: true });
  };

  closeAddFriendDialog = () => {
    this.setState({ addFriendOpen: false });
  };

  addFriendHandler = username => {
    const data = {
      username
    };
    this.props.addFriend(data);
  };

  render() {
    const { classes } = this.props;
    const { friendOpen, addFriendOpen, dialog, tabValue } = this.state;
    const { friends, foundUser, addFriend } = this.props.profile;
    const { isAuthenticated } = this.props.auth;

    let friendsWrapper;
    let friendsContent;
    let friendsChart;

    if (!friends) {
      friendsContent = null;
      friendsChart = null;
    } else {
      if (Object.keys(friends).length > 0) {
        if (tabValue === 0) {
          friendsChart = (
            <Grid container style={{ marginBottom: 12, width: "100%" }}>
              <RoundsPlayed roundsPerFriend={friends.roundsPerFriend} />
            </Grid>
          );

          friendsContent = friends.roundsPerFriend.map(friend => {
            return (
              <MyFriend
                key={friend.friend}
                data={friend.friend}
                getUserHandler={this.getUser}
                openDialogHandler={this.openFriendDialog}
              />
            );
          });
        } else if (tabValue === 1) {
          friendsContent = (
            <FindFriends
              handler={this.getUser}
              data={foundUser}
              addFriend={this.addFriendHandler}
              openDialog={this.openAddFriendDialog}
            />
          );
        }
      }
    }

    if (!isAuthenticated) {
      friendsWrapper = null;
    } else {
      friendsWrapper = (
        <div className={classes.root}>
          {typeof foundUser === "object" ? (
            <FriendDialog
              open={friendOpen}
              close={this.closeFriendDialog}
              data={foundUser}
            />
          ) : null}

          <AddFriendDialog
            open={addFriendOpen}
            handler={this.closeAddFriendDialog}
            data={addFriend}
          />
          <Toolbar style={{ marginBottom: 12 }}>
            <Typography variant="h5" className={classes.toolbarHeading}>
              Friends
            </Typography>
            <IconButton onClick={this.handleDialogOpen}>
              <InfoButton />
            </IconButton>
          </Toolbar>
          <Dialog open={dialog} onClose={this.handleDialogClose}>
            <DialogTitle>Friends</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Friends has two sections. "My Friends" shows all the friends you
                have added to your profile. "Find Friends" is where you can look
                up a friends username so that you can add them.
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <Paper className={classes.tabs}>
            <Tabs
              value={tabValue}
              onChange={this.handleTabChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="MY FRIENDS" />
              <Tab label="FIND FRIENDS" />
            </Tabs>
          </Paper>
          <Grid container style={{ marginTop: 12 }}>
            <Grid item xs={12}>
              {friendsChart}
            </Grid>
          </Grid>

          <div className={classes.gridWrapper}>
            <div className={classes.grid}>
              <Grid container justify="center" spacing={8}>
                {friendsContent}
              </Grid>
            </div>
          </div>
        </div>
      );
    }

    return friendsWrapper;
  }
}

Friends.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getFriendsData: PropTypes.func.isRequired,
  getUserByName: PropTypes.func.isRequired,
  addFriend: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getFriendsData, getUserByName, addFriend, clearFoundUser }
)(withStyles(styles)(Friends));
