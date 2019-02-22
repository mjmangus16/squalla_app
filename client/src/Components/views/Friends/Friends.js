import React, { Component } from "react";
import {
  Grid,
  Toolbar,
  Typography,
  IconButton,
  Button,
  InputBase,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles
} from "@material-ui/core";
import InfoButton from "@material-ui/icons/Info";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";

import MyFriend from "./Cards/MyFriend";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "95%",
    maxWidth: 1000,
    height: "calc(100% - 64px)",
    margin: "auto"
  },
  addCourseButton: {
    width: "50%"
  },
  gridWrapper: {
    marginTop: 12,
    position: "relative"
  },
  grid: {
    maxHeight: "76vh",
    overflowX: "auto"
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
  }
});

class Friends extends Component {
  state = {
    myFriends: true,
    addFriends: false
  };

  myFriendsClicked = () => {
    this.setState({
      myFriends: true,
      addFriends: false
    });
  };

  addFriendsClicked = () => {
    this.setState({
      myFriends: false,
      addFriends: true
    });
  };

  render() {
    const { classes } = this.props;
    const { myFriends, addFriends } = this.state;

    let content = [];

    for (let i = 0; i < 10; i++) {
      content.push(<MyFriend />);
    }

    return (
      <div className={classes.root}>
        <Toolbar style={{ marginBottom: 12 }}>
          <Typography variant="h5">Friends</Typography>
          <IconButton>
            <InfoButton />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={this.mySearch}
              placeholder="Search…"
              id="search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
        <Button
          variant={myFriends ? "raised" : "outlined"}
          size="small"
          className={classes.addCourseButton}
          onClick={this.myFriendsClicked}
        >
          My Friends
        </Button>
        <Button
          variant={addFriends ? "raised" : "outlined"}
          size="small"
          className={classes.addCourseButton}
          onClick={this.addFriendsClicked}
        >
          Find Friends
        </Button>
        <div className={classes.gridWrapper}>
          <div className={classes.grid}>
            <Grid container justify="center" spacing={24}>
              {content}
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Friends);
