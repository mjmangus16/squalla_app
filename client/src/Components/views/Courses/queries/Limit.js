import React, { Fragment } from "react";
import {
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  formControl: {
    minWidth: 75,
    margin: "auto"
  }
});

const Limit = ({ classes, handler, value }) => {
  const nums = [5, 10, 25, 50, 100];

  return (
    <Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="amount-simple">Count</InputLabel>
        <Select
          value={value}
          onChange={handler}
          inputProps={{
            name: "amount",
            id: "amount-simple"
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {nums.map(num => (
            <MenuItem value={num} key={nums.indexOf(num)}>
              {num}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default withStyles(styles)(Limit);
