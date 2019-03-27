import React, { Component, Fragment } from "react";
import {
  Grid,
  Toolbar,
  Button,
  InputBase,
  Card,
  CardHeader,
  IconButton,
  Typography,
  Paper,
  withStyles
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core/styles/colorManipulator";

import { lightBlue } from "@material-ui/core/colors";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const styles = theme => ({
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

class FindFriend extends Component {
  state = {
    username: ""
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes, handler, data, addFriend, openDialog } = this.props;

    let userContent;

    if (!data) {
      userContent = null;
    } else {
      if (typeof data === "string") {
        userContent = (
          <Paper style={{ height: 50, textAlign: "center" }}>
            <Typography style={{ padding: 15 }}>{data}</Typography>
          </Paper>
        );
      } else if (typeof data === "object") {
        userContent = (
          <Card>
            <CardHeader
              title={data.username}
              subheader={`Level: ${data.level}`}
              action={
                <IconButton
                  onClick={() => {
                    addFriend(data.username);
                    openDialog();
                  }}
                >
                  <PersonAddIcon />
                </IconButton>
              }
            />
          </Card>
        );
      }
    }

    return (
      <Fragment>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            onChange={this.handleChange("username")}
            placeholder="Search By Username..."
            id="search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
          />
        </div>
        <Button
          variant="contained"
          style={{ backgroundColor: lightBlue[700] }}
          onClick={() => handler(this.state.username)}
        >
          SEARCH
        </Button>

        <Grid container justify="center" style={{ marginTop: 12 }}>
          <Grid item xs={12} sm={4}>
            {userContent}
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(FindFriend);
