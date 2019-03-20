import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCourses } from "../../../redux/actions/profileActions";
import Spinner from "../../Spinner/Spinner";
import {
  Grid,
  Toolbar,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

import ByName from "./queries/ByName";
import ByZip from "./queries/ByZip";
import ByState from "./queries/ByState";
import NearMe from "./queries/NearMe";
import Limit from "./queries/Limit";

import AddCourse from "./Cards/AddCourse";

const styles = theme => ({
  gridContainer: {
    width: "75%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: 15
    }
  },
  navButtonColor: {
    backgroundColor: teal[300]
  }
});

class FindCourse extends Component {
  state = {
    nearMe: true,
    byState: false,
    byZip: false,
    byName: false,
    queryData: "",
    limit: "10",
    tees: ["red", "white", "blue"]
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  nearMeHandler = () => {
    this.setState({
      nearMe: true,
      byState: false,
      byZip: false,
      byName: false
    });
  };

  byStateHandler = () => {
    this.setState({
      nearMe: false,
      byState: true,
      byZip: false,
      byName: false
    });
  };

  byZipHandler = () => {
    this.setState({
      nearMe: false,
      byState: false,
      byZip: true,
      byName: false
    });
  };

  byNameHandler = () => {
    this.setState({
      nearMe: false,
      byState: false,
      byZip: false,
      byName: true
    });
  };

  handleNearMe = data => {
    this.setState({ queryData: data }, () => {
      this.submitSearch();
    });
  };

  submitSearch = () => {
    const data = {
      data: this.state.queryData,
      limit: this.state.limit
    };
    if (this.state.byName) {
      data.query = "name";
    } else if (this.state.nearMe) {
      data.query = "nearMe";
    } else if (this.state.byState) {
      data.query = "state";
    } else if (this.state.byZip) {
      data.query = "zip";
    }
    this.props.getCourses(data);
  };

  render() {
    const { dialogHandler, classes, addCourse } = this.props;
    const { nearMe, byState, byZip, byName, limit } = this.state;
    const { courses, loading } = this.props.profile;

    let courseContent;
    let queryContent;

    if (byName) {
      queryContent = (
        <ByName
          handler={this.handleChange("queryData")}
          submit={this.submitSearch}
        />
      );
    } else if (byZip) {
      queryContent = (
        <ByZip
          handler={this.handleChange("queryData")}
          submit={this.submitSearch}
        />
      );
    } else if (byState) {
      queryContent = (
        <ByState
          handler={this.handleChange("queryData")}
          submit={this.submitSearch}
          queryData={this.state.queryData}
        />
      );
    } else if (nearMe) {
      queryContent = (
        <NearMe handler={this.handleNearMe} submit={this.submitSearch} />
      );
    }

    if (loading) {
      courseContent = <Spinner />;
    } else {
      if (!courses) {
        courseContent = null;
      } else {
        if (Object.keys(courses).length > 0) {
          if (courses.courses) {
            courseContent = courses.courses.map(course => (
              <AddCourse
                data={course}
                addCourseHandler={dialogHandler}
                key={courses.courses.indexOf(course)}
                addCourse={addCourse}
              />
            ));
          } else {
            courseContent = (
              <div style={{ marginTop: 50 }}>
                <Typography variant="title">
                  Could not find any courses based on that criteria.
                </Typography>
              </div>
            );
          }
        }
      }
    }

    return (
      <Fragment>
        <Toolbar style={{ marginTop: 25 }}>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={6} sm={3}>
              <Button
                fullWidth
                className={nearMe ? classes.navButtonColor : null}
                variant={nearMe ? "contained" : "outlined"}
                onClick={this.nearMeHandler}
                size="small"
              >
                Near Me
              </Button>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Button
                fullWidth
                className={byName ? classes.navButtonColor : null}
                variant={byName ? "contained" : "outlined"}
                onClick={this.byNameHandler}
                size="small"
              >
                Name
              </Button>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Button
                fullWidth
                className={byState ? classes.navButtonColor : null}
                variant={byState ? "contained" : "outlined"}
                onClick={this.byStateHandler}
                size="small"
              >
                State
              </Button>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Button
                fullWidth
                className={byZip ? classes.navButtonColor : null}
                variant={byZip ? "contained" : "outlined"}
                onClick={this.byZipHandler}
                size="small"
              >
                Zip
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
        <Grid container style={{ maxWidth: 400, margin: "auto" }}>
          <Grid item sm={3} style={{ margin: "auto" }}>
            <Limit handler={this.handleChange("limit")} value={limit} />
          </Grid>
          <Grid
            item
            sm={9}
            style={{ margin: "auto auto 0px", textAlign: "center" }}
          >
            {queryContent}
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          spacing={8}
          style={{ margin: "12px auto auto auto", width: "100%" }}
        >
          {courseContent}
        </Grid>
      </Fragment>
    );
  }
}

FindCourse.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getCourses: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getCourses }
)(withStyles(styles)(FindCourse));
