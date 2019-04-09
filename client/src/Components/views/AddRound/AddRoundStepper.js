import React, { Component } from "react";
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  MobileStepper,
  withStyles
} from "@material-ui/core";
import ErrorMsg from "./ErrorMsg";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import DateInput from "./Cards/Date";
import CourseInput from "./Cards/Course";
import LeagueInput from "./Cards/League";
import PlayersInput from "./Cards/Players";
import ScoresInput from "./Cards/Scores";
import Summary from "./Cards/Summary";
import Success from "./Cards/Success";

const styles = theme => ({
  root: {
    width: "100%"
  },

  button: {
    marginRight: theme.spacing.unit,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  content: {
    marginTop: 25
  },
  stepper: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  stepperMobile: {
    flexGrow: 1,
    maxWidth: 400,
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

function getSteps() {
  return ["Date", "Course", "League", "Players", "Scores", "Summary"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Select the date the round was played";
    case 1:
      return "Select the course and tees played";
    case 2:
      return "Select a league if it was a league match";
    case 3:
      return "Select the players that played";
    case 4:
      return "Input the total score for each player";
    case 5:
      return "Summary of the round";
    default:
      return "Unknown step";
  }
}

function getStepContent2(
  step,
  user,
  dateInputHandler,
  teeInputHandler,
  courseInputHandler,
  courses,
  friends,
  playersInputHandler,
  players,
  scoresInputHandler,
  scores,
  summary
) {
  switch (step) {
    case 0:
      return <DateInput handler={dateInputHandler} />;
    case 1:
      return (
        <CourseInput
          courses={courses}
          teeHandler={teeInputHandler}
          courseHandler={courseInputHandler}
        />
      );
    case 2:
      return <LeagueInput />;
    case 3:
      return (
        <PlayersInput
          user={user}
          friends={friends}
          playersHandler={playersInputHandler}
          players={players}
        />
      );
    case 4:
      return (
        <ScoresInput
          players={players}
          scoresHandler={scoresInputHandler}
          scores={scores}
        />
      );
    case 5:
      return <Summary summary={summary} />;
    default:
      return "Unknown step";
  }
}

const combinePlayersScores = (players, scores) => {
  let array = [];
  for (let i = 0; i < players.length; i++) {
    array.push({ player: players[i], score: scores[i] });
  }
  return array;
};

class AddRoundStepper extends Component {
  state = {
    activeStep: 0,
    skipped: new Set(),
    date: "",
    tee: "",
    course: {},
    players: [],
    scores: [],
    summary: {},
    errorMsg: ""
  };

  players = [];
  scores = [];

  submitRoundHandler = () => {
    let data = {
      course: this.state.course.name,
      players: this.state.players.join(),
      scores: this.state.scores.join(),
      tees: this.state.tee,
      date: this.state.date,
      city: this.state.course.city,
      state: this.state.course.state,
      holes: this.state.course.holes,
      distance: this.state.course.distance,
      foliage: this.state.course.foliage,
      elevation: this.state.course.elevation
    };
    console.log(data);
    this.props.submitRound(data);
    this.setState({
      date: "",
      tee: "",
      course: {},
      players: [],
      scores: [],
      summary: {}
    });
  };

  getSummary = () => {
    const summary = {
      date: this.state.date,
      tee: this.state.tee,
      course: this.state.course,
      players: combinePlayersScores(this.state.players, this.state.scores)
    };

    this.setState({
      summary: summary
    });
  };

  dateInputHandler = date => {
    this.setState({ date: date });
  };

  teeInputHandler = tee => {
    this.setState({ tee: tee });
  };

  courseInputHandler = course => {
    this.setState({ course: course });
  };

  playersInputHandler = player => {
    if (this.players.includes(player)) {
      this.scores.splice(this.players.indexOf(player), 1);
      this.players.splice(this.players.indexOf(player), 1);
    } else {
      this.players.push(player);
      this.scores.push("");
    }

    this.setState({ players: this.players, scores: this.scores });
  };

  scoresInputHandler = (score, index) => {
    this.scores[index] = score;

    this.setState({ scores: this.scores });
  };

  isStepOptional = step => step === 2;

  handleNext = () => {
    const { activeStep, date, tee, course, players, scores } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    if (activeStep === 0) {
      if (date === "") {
        this.setState({
          errorMsg: "You must select the date the round was played"
        });
      } else {
        this.setState({
          activeStep: activeStep + 1,
          skipped,
          errorMsg: ""
        });
      }
    } else if (activeStep === 1) {
      if (tee !== "" && Object.keys(course).length !== 0) {
        this.setState({
          activeStep: activeStep + 1,
          skipped,
          errorMsg: ""
        });
      } else {
        this.setState({
          errorMsg:
            "You must select the tees and course the round was played at"
        });
      }
    } else if (activeStep === 2) {
      this.setState({
        activeStep: activeStep + 1,
        skipped,
        errorMsg: ""
      });
    } else if (activeStep === 3) {
      if (players.length === 0) {
        this.setState({
          errorMsg: "You must select at least one player"
        });
      } else {
        this.setState({
          activeStep: activeStep + 1,
          skipped,
          errorMsg: ""
        });
      }
    } else if (activeStep === 4) {
      let pass = true;

      for (let i = 0; i < scores.length; i++) {
        if (scores[i] === "") {
          pass = false;
        }
      }
      if (pass === true) {
        this.setState({
          activeStep: activeStep + 1,
          skipped,
          errorMsg: ""
        });
      } else {
        this.setState({ errorMsg: "A score is required for each player" });
      }
    } else if (activeStep === 5) {
      this.setState({
        activeStep: activeStep + 1,
        skipped,
        errorMsg: ""
      });
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      date: "",
      tee: "",
      course: {},
      players: [],
      scores: [],
      summary: {}
    });

    this.players = [];
    this.scores = [];

    this.props.clearSubmitRound();
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    const { classes, courses, friends, user, success, theme } = this.props;
    const steps = getSteps();
    const { activeStep, players, scores, summary, errorMsg } = this.state;

    let mobileStepNext;

    if (activeStep === steps.length - 1) {
      mobileStepNext = "Submit";
    } else if (activeStep === steps.length) {
      mobileStepNext = "Reset";
    } else {
      mobileStepNext = "Next";
    }

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <MobileStepper
          variant="dots"
          steps={7}
          position="static"
          activeStep={this.state.activeStep}
          className={classes.stepperMobile}
          nextButton={
            <Button
              size="small"
              onClick={() => {
                if (activeStep === 4) {
                  this.getSummary();
                  this.handleNext();
                } else if (activeStep === steps.length - 1) {
                  this.submitRoundHandler();
                  this.handleNext();
                } else if (activeStep === steps.length) {
                  this.handleReset();
                } else {
                  this.handleNext();
                }
              }}
            >
              {mobileStepNext}
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={this.state.activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
              <div>
                {success !== null ? <Success success={success} /> : null}
              </div>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                {this.isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    if (activeStep === 4) {
                      this.getSummary();
                      this.handleNext();
                    } else if (activeStep === steps.length - 1) {
                      this.submitRoundHandler();
                      this.handleNext();
                    } else {
                      this.handleNext();
                    }
                  }}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
              <div className={classes.content}>
                {errorMsg !== "" ? <ErrorMsg error={errorMsg} /> : null}
                {getStepContent2(
                  activeStep,
                  user,
                  this.dateInputHandler,
                  this.teeInputHandler,
                  this.courseInputHandler,
                  courses,
                  friends,
                  this.playersInputHandler,
                  players,
                  this.scoresInputHandler,
                  scores,
                  summary
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AddRoundStepper);
