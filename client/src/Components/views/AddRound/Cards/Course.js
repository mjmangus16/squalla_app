import React, { Component } from "react";
import { Card, Grid, CardContent, Button, withStyles } from "@material-ui/core";
import { red, grey, blue, yellow } from "@material-ui/core/colors";

const styles = theme => ({
  card: {
    width: "100%",
    height: "100%",
    marginBottom: 10
  },
  gridContainer: {
    width: "75%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  redTee: {
    backgroundColor: red[300]
  },
  whiteTee: {
    backgroundColor: grey[300]
  },
  blueTee: {
    backgroundColor: blue[300]
  },
  goldTee: {
    backgroundColor: yellow[300]
  }
});

class CourseInput extends Component {
  state = {
    redTee: false,
    whiteTee: false,
    blueTee: false,
    goldTee: false,
    courseSelected: ""
  };

  teeSelected = tee => {
    this.setState({
      redTee: tee === "Red" ? true : false,
      whiteTee: tee === "White" ? true : false,
      blueTee: tee === "Blue" ? true : false,
      goldTee: tee === "Gold" ? true : false
    });
    this.props.teeHandler(tee);
  };

  courseHandler = course => {
    const data = {
      name: course.name,
      city: course.city,
      state: course.state,
      holes: course.holes,
      distance: course.distance,
      foliage: course.foliage,
      elevation: course.elevation
    };
    this.setState({ courseSelected: data.name });
  };

  render() {
    const { classes, courses, teeHandler, courseHandler } = this.props;
    const { redTee, whiteTee, blueTee, goldTee, courseSelected } = this.state;

    return (
      <Card raised className={classes.card}>
        <CardContent>
          <Grid
            container
            spacing={8}
            className={classes.gridContainer}
            justify="center"
          >
            <Grid item xs={3} sm={3}>
              <Button
                variant={redTee ? "contained" : "outlined"}
                onClick={() => this.teeSelected("Red")}
                className={redTee ? classes.redTee : null}
                fullWidth
              >
                Red
              </Button>
            </Grid>
            <Grid item xs={3} sm={3}>
              <Button
                variant={whiteTee ? "contained" : "outlined"}
                onClick={() => this.teeSelected("White")}
                className={whiteTee ? classes.whiteTee : null}
                fullWidth
              >
                White
              </Button>
            </Grid>
            <Grid item xs={3} sm={3}>
              <Button
                variant={blueTee ? "contained" : "outlined"}
                onClick={() => this.teeSelected("Blue")}
                className={blueTee ? classes.blueTee : null}
                fullWidth
              >
                Blue
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant={goldTee ? "contained" : "outlined"}
                onClick={() => this.teeSelected("Gold")}
                className={goldTee ? classes.goldTee : null}
                fullWidth
              >
                Gold
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <Grid
            container
            spacing={16}
            className={classes.gridContainer}
            justify="center"
          >
            {courses.map(course => (
              <Grid item xs={12} sm={8} key={courses.indexOf(course)}>
                <Button
                  fullWidth
                  onClick={() => {
                    const data = {
                      name: course.name,
                      city: course.city,
                      state: course.state,
                      holes: course.holes,
                      distance: course.distance,
                      foliage: course.foliage,
                      elevation: course.elevation
                    };
                    courseHandler(data);
                    this.setState({ courseSelected: data.name });
                  }}
                  variant={
                    course.name === courseSelected ? "contained" : "outlined"
                  }
                >
                  {course.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(CourseInput);
