import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCourses } from "../../../redux/actions/profileActions";
import Spinner from "../../Spinner/Spinner";
import { Grid, Tabs, Tab, Typography, withStyles } from "@material-ui/core";

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
  limit: {
    display: "none"
  },
  tabs: {
    margin: "25px auto 25px",
    width: "75%",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  selected: {
    borderTop: "1px solid grey",
    borderLeft: "1px solid grey"
  },
  tab: {
    borderTop: "1px solid grey",
    borderLeft: "1px solid grey",
    borderBottom: "1px solid grey"
  }
});

class FindCourse extends Component {
  state = {
    queryData: "",
    limit: "10",
    tabValue: 0
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleTabChange = (event, value) => {
    this.setState({ tabValue: value });
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
    if (this.state.tabValue === 1) {
      data.query = "name";
    } else if (this.state.tabValue === 0) {
      data.query = "nearMe";
    } else if (this.state.tabValue === 2) {
      data.query = "state";
    } else if (this.state.tabValue === 3) {
      data.query = "zip";
    }

    this.props.getCourses(data);
  };

  render() {
    const { dialogHandler, classes, addCourse } = this.props;
    const { limit, tabValue } = this.state;
    const { courses, loading } = this.props.profile;

    let courseContent;
    let queryContent;

    if (tabValue === 1) {
      queryContent = (
        <ByName
          handler={this.handleChange("queryData")}
          submit={this.submitSearch}
        />
      );
    } else if (tabValue === 3) {
      queryContent = (
        <ByZip
          handler={this.handleChange("queryData")}
          submit={this.submitSearch}
        />
      );
    } else if (tabValue === 2) {
      queryContent = (
        <ByState
          handler={this.handleChange("queryData")}
          submit={this.submitSearch}
          queryData={this.state.queryData}
        />
      );
    } else if (tabValue === 0) {
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
                <Typography
                  variant="title"
                  align="center"
                  style={{ width: "75%", margin: "auto" }}
                >
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
        <Tabs
          className={classes.tabs}
          value={tabValue}
          onChange={this.handleTabChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab
            label="NEAR ME"
            className={tabValue === 0 ? classes.selected : classes.tab}
          />
          <Tab
            label="NAME"
            className={tabValue === 1 ? classes.selected : classes.tab}
          />
          <Tab
            label="STATE"
            className={tabValue === 2 ? classes.selected : classes.tab}
          />
          <Tab
            label="ZIP"
            className={tabValue === 3 ? classes.selected : classes.tab}
            style={{ borderRight: "1px solid grey" }}
          />
        </Tabs>
        <Grid container style={{ maxWidth: 400, margin: "auto" }}>
          <Grid
            item
            sm={3}
            style={{ margin: "auto" }}
            className={tabValue === 1 ? classes.limit : null}
          >
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
