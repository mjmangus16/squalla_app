import React, { Component, Fragment } from "react";
import {
  Dialog,
  CardHeader,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  withStyles
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 100
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class AddCourseDialog extends Component {
  state = {
    par1: "",
    par2: "",
    par3: "",
    par4: ""
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const {
      open,
      closeHandler,
      data,
      distance,
      classes,
      addCourse,
      addCourseData
    } = this.props;
    const { par1, par2, par3, par4 } = this.state;

    let dialogContent;

    if (!addCourseData) {
      dialogContent = (
        <Fragment>
          <CardHeader
            title={data.course_name}
            subheader={`${data.city}, ${data.state_province}`}
          />

          <DialogContent>
            <DialogContentText>
              Please add the par for the tees that exist at this course
            </DialogContentText>
            <form className={classes.container}>
              <TextField
                id="standard-par1"
                label="Red Tee Par"
                className={classes.textField}
                value={par1}
                onChange={this.handleChange("par1")}
                margin="normal"
              />
              <TextField
                id="standard-par2"
                label="White Tee Par"
                className={classes.textField}
                value={par2}
                onChange={this.handleChange("par2")}
                margin="normal"
              />
              <TextField
                id="standard-par3"
                label="Blue Tee Par"
                className={classes.textField}
                value={par3}
                onChange={this.handleChange("par3")}
                margin="normal"
              />
              <TextField
                id="standard-par4"
                label="Gold Tee Par"
                className={classes.textField}
                value={par4}
                onChange={this.handleChange("par4")}
                margin="normal"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              fullWidth
              size="large"
              variant="contained"
              color="secondary"
              onClick={() => addCourse(data, distance, par1, par2, par3, par4)}
            >
              Add Course
            </Button>
          </DialogActions>
        </Fragment>
      );
    } else if (addCourseData) {
      if (addCourseData === true) {
        dialogContent = (
          <Fragment>
            <DialogTitle>
              Successfully added{" "}
              <span style={{ color: green[400] }}>{data.course_name}</span> to
              your profile!
            </DialogTitle>
          </Fragment>
        );
      } else {
        dialogContent = (
          <Fragment>
            <DialogTitle>{addCourseData.addCourse}</DialogTitle>
          </Fragment>
        );
      }
    }

    return (
      <Dialog open={open} onClose={closeHandler}>
        {dialogContent}
      </Dialog>
    );
  }
}

export default withStyles(styles)(AddCourseDialog);
