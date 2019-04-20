import React from "react";
import { Card, CardContent, TextField, withStyles } from "@material-ui/core";

const styles = theme => ({
  card: {
    width: "100%",
    height: "100%"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150
  }
});

const DateInput = ({ classes, handler }) => {
  return (
    <Card raised className={classes.card}>
      <CardContent style={{ width: 200, margin: "auto" }}>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Date of Round"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => {
              let date = new Date(e.target.value);
              let formattedDate = `${date.getMonth() + 1}/${date.getDate() +
                1}/${date
                .getFullYear()
                .toString()
                .substr(-2)}`;

              handler(formattedDate);
            }}
          />
        </form>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(DateInput);
