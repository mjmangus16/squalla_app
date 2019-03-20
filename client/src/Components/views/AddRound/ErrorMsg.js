import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const styles = theme => ({
  text: {
    paddingBottom: 5,
    color: red[300]
  }
});

const ErrorMsg = ({ classes, error }) => {
  return (
    <Typography align="center" className={classes.text}>
      {error}
    </Typography>
  );
};

export default withStyles(styles)(ErrorMsg);
