import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getUserCourses,
  addCourse,
  clearAddCourse,
  editCourse
} from "../../../redux/actions/profileActions";
import {
  Grid,
  Toolbar,
  Typography,
  IconButton,
  Button,
  InputBase,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  withStyles
} from "@material-ui/core";
import InfoButton from "@material-ui/icons/Info";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";

import FindCourses from "./FindCourse";
import MyCourse from "./Cards/MyCourse";
import AddCourseDialog from "./Cards/AddCourseDialog";
import EditCourseDialog from "./Cards/EditCourseDialog";

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
    myCoursesBool: true,
    addCourses: false,
    addCourseDialog: false,
    editCourseDialog: false,
    courseData: {},
    distance: "",
    editCourseData: {},
    editPar1: "",
    editPar2: "",
    editPar3: "",
    editPar4: "",
    dialog: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  componentDidMount() {
    this.props.getUserCourses();
  }

  myCoursesClicked = () => {
    this.setState({
      myCoursesBool: true,
      addCourses: false
    });
    this.props.getUserCourses();
  };

  addCoursesClicked = () => {
    this.setState({
      myCoursesBool: false,
      addCourses: true
    });
  };

  findCourseHandler = course => {
    course = course
      .toLowerCase()
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");

    const data = {
      name: course
    };

    this.props.getCourseByName(data);
  };

  addCourseDialogHandler = (courseData, distance) => {
    this.setState({
      addCourseDialog: true,
      courseData: courseData,
      distance: distance
    });
  };

  editCourseDialogHandler = data => {
    this.setState({
      editCourseDialog: true,
      editCourseData: data,
      editPar1: data.tees[0].par,
      editPar2: data.tees[1].par,
      editPar3: data.tees[2].par,
      editPar4: data.tees[3].par
    });
  };

  closeDialogHandler = () => {
    this.setState({
      addCourseDialog: false,
      editCourseDialog: false,
      courseData: {},
      distance: ""
    });
    this.props.clearAddCourse();
  };

  addCourseHandler = (course, distance, par1, par2, par3, par4) => {
    let data = {
      name: course.course_name,
      city: course.city,
      state: course.state_province,
      holes: course.holes,
      distance: distance,
      foliage: course.course_foliage,
      elevation: course.course_elevation,
      par1,
      par2,
      par3,
      par4
    };

    this.props.addCourse(data);
  };

  editCourseHandler = (course, red, white, blue, gold) => {
    const data = {};

    data.course = course;

    if (red !== "") {
      data.redPar = red;
    } else {
      data.redPar = "N/A";
    }

    if (white !== "") {
      data.whitePar = white;
    } else {
      data.whitePar = "N/A";
    }

    if (blue !== "") {
      data.bluePar = blue;
    } else {
      data.bluePar = "N/A";
    }

    if (gold !== "") {
      data.goldPar = gold;
    } else {
      data.goldPar = "N/A";
    }

    this.props.editCourse(data);
  };

  mySearch = () => {
    let courses;
    if (this.state.myCoursesBool) {
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

  handleDialogOpen = () => {
    this.setState({ dialog: true });
  };

  handleDialogClose = () => {
    this.setState({ dialog: false });
  };

  render() {
    const { classes } = this.props;
    const addCourseData = this.props.profile.addCourse;
    const {
      myCoursesBool,
      addCourses,
      addCourseDialog,
      editCourseDialog,
      courseData,
      distance,
      editCourseData,
      editPar1,
      editPar2,
      editPar3,
      editPar4,
      dialog
    } = this.state;
    const { myCourses, editCourse } = this.props.profile;
    const { isAuthenticated } = this.props.auth;

    let coursesWrapper;
    let coursesContent;

    if (myCoursesBool) {
      if (!myCourses) {
        coursesContent = null;
      } else {
        if (Object.keys(myCourses).length > 0) {
          coursesContent = (
            <Grid container justify="center" spacing={8}>
              {myCourses.map(course => (
                <MyCourse
                  data={course}
                  key={myCourses.indexOf(course)}
                  editCourseHandler={this.editCourseDialogHandler}
                />
              ))}
            </Grid>
          );
        }
      }
    } else if (addCourses) {
      coursesContent = (
        <FindCourses
          handler={this.findCourseHandler}
          dialogHandler={this.addCourseDialogHandler}
        />
      );
    }

    if (!isAuthenticated) {
      coursesWrapper = null;
    } else {
      coursesWrapper = (
        <div className={classes.root}>
          <EditCourseDialog
            open={editCourseDialog}
            closeHandler={this.closeDialogHandler}
            data={editCourseData}
            editCourseHandler={this.editCourseHandler}
            editCourse={editCourse}
            editPars={{
              par1: editPar1,
              par2: editPar2,
              par3: editPar3,
              par4: editPar4
            }}
            handleChange={this.handleChange}
          />
          <AddCourseDialog
            open={addCourseDialog}
            closeHandler={this.closeDialogHandler}
            data={courseData}
            addCourse={this.addCourseHandler}
            distance={distance}
            addCourseData={addCourseData}
          />
          <Toolbar style={{ marginBottom: 12 }}>
            <Typography variant="h5" className={classes.toolbarHeading}>
              Courses
            </Typography>
            <IconButton onClick={this.handleDialogOpen}>
              <InfoButton />
            </IconButton>

            {myCoursesBool ? (
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
            ) : null}
          </Toolbar>
          <Dialog open={dialog} onClose={this.handleDialogClose}>
            <DialogTitle>Courses Info</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Courses has two sections. "My Courses" lists your stats for the
                courses you play. "Find Courses" is where you can find local
                courses and add them to your profile.
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <Grid container>
            <Grid item xs={6}>
              <Button
                variant={myCoursesBool ? "contained" : "outlined"}
                size="small"
                fullWidth
                onClick={this.myCoursesClicked}
              >
                My Courses
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant={addCourses ? "contained" : "outlined"}
                size="small"
                fullWidth
                onClick={this.addCoursesClicked}
              >
                Find Courses
              </Button>
            </Grid>
          </Grid>
          <div className={classes.gridWrapper}>
            <div className={classes.grid}>{coursesContent}</div>
          </div>
        </div>
      );
    }

    return coursesWrapper;
  }
}

Courses.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getUserCourses: PropTypes.func.isRequired,
  addCourse: PropTypes.func.isRequired,
  editCourse: PropTypes.func.isRequired,
  clearAddCourse: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getUserCourses, addCourse, clearAddCourse, editCourse }
)(withStyles(styles)(Courses));
