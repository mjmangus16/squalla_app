import React, { Component } from "react";
import {
  Dialog,
  CardHeader,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 90
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class EditCourseDialog extends Component {
  render() {
    const {
      open,
      closeHandler,
      data,
      editCourseHandler,
      handleChange,
      classes
    } = this.props;
    const { par1, par2, par3, par4 } = this.props.editPars;

    return (
      <Dialog open={open} onClose={closeHandler}>
        <CardHeader
          title={data.name}
          subheader={`${data.city}, ${data.state}`}
        />
        <DialogContent>
          <DialogContentText>
            You can edit or add pars for this course below
          </DialogContentText>
          <form className={classes.container}>
            <TextField
              id="standard-par1"
              label="Red Tee"
              className={classes.textField}
              value={par1}
              onChange={handleChange("editPar1")}
              margin="normal"
            />
            <TextField
              id="standard-par2"
              label="White Tee"
              className={classes.textField}
              value={par2}
              onChange={handleChange("editPar2")}
              margin="normal"
            />
            <TextField
              id="standard-par3"
              label="Blue Tee"
              className={classes.textField}
              value={par3}
              onChange={handleChange("editPar3")}
              margin="normal"
            />
            <TextField
              id="standard-par4"
              label="Gold Tee"
              className={classes.textField}
              value={par4}
              onChange={handleChange("editPar4")}
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
            onClick={() => editCourseHandler(data.name, par1, par2, par3, par4)}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(EditCourseDialog);
