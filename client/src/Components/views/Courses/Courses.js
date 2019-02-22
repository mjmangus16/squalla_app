import React, { Component, Fragment } from "react";
import axios from "axios";
import {
  Grid,
  Toolbar,
  Typography,
  IconButton,
  Button,
  InputBase,
  withStyles
} from "@material-ui/core";
import InfoButton from "@material-ui/icons/Info";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";

import AddCourse from "./Cards/AddCourse";
import MyCourse from "./Cards/MyCourse";

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

class Courses extends Component {
  state = {
    myCourses: true,
    addCourses: false,
    addCoursesData: []
  };

  componentDidMount() {
    axios.get("/api/courses/all").then(res => {
      this.setState({
        addCoursesData: res.data
      });
    });
  }

  myCoursesClicked = () => {
    this.setState({
      myCourses: true,
      addCourses: false
    });
  };

  addCoursesClicked = () => {
    this.setState({
      myCourses: false,
      addCourses: true
    });
  };

  mySearch = () => {
    let courses;
    if (this.state.myCourses) {
      courses = document.querySelectorAll(".myCourseCard");
    } else if (this.state.addCourses) {
      courses = document.querySelectorAll(".addCourseCard");
    }

    const value = document.getElementById("search").value.toUpperCase();

    for (let i = 0; i < courses.length; i++) {
      let name =
        courses[i].firstChild.firstChild.firstChild.firstChild.textContent;
      if (name.toUpperCase().indexOf(value) > -1) {
        courses[i].style.display = "";
      } else {
        courses[i].style.display = "none";
      }
    }
  };

  render() {
    const { classes, drawerWidth } = this.props;
    const { myCourses, addCourses, addCoursesData } = this.state;

    let content = [];

    if (myCourses) {
      for (let i = 0; i < 8; i++) {
        content.push(<MyCourse />);
      }
    } else if (addCourses) {
      content = addCoursesData.map(course => (
        <AddCourse data={course} key={addCoursesData.indexOf(course)} />
      ));
    }

    return (
      <div className={classes.root}>
        <Toolbar style={{ marginBottom: 12 }}>
          <Typography variant="h5">Courses</Typography>
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
          variant={myCourses ? "raised" : "outlined"}
          size="small"
          className={classes.addCourseButton}
          onClick={this.myCoursesClicked}
        >
          My Courses
        </Button>
        <Button
          variant={addCourses ? "raised" : "outlined"}
          size="small"
          className={classes.addCourseButton}
          onClick={this.addCoursesClicked}
        >
          ADD COURSES
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

export default withStyles(styles)(Courses);
