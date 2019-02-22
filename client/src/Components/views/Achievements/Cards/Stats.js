import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  card: {
    width: "100%",
    height: 215
  }
});

const Stats = ({ classes }) => {
  return (
    <Card className={classes.card}>
      <CardHeader title="Stats" />
      <CardContent>
        <Typography variant="subtitle1">59 - Total Points Earned</Typography>
        <Typography variant="subtitle1">
          14 - Total Achievements Earned
        </Typography>
        <Typography variant="subtitle1">
          12 - Most Points Earned In A Round
        </Typography>
        <Typography variant="subtitle1">
          17 - Most Points Earned In A Day
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Stats);
