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
    height: "100%"
  },
  fontSize: {}
});

const Stats = ({ classes, data, stat }) => {
  if (stat === "points") {
    return (
      <Card raised className={classes.card}>
        <CardContent>
          <Typography
            variant="title"
            align="center"
            style={{ fontSize: "1em", textDecoration: "underline" }}
          >
            Points
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="subtitle1" align="center">
            {data}
          </Typography>
        </CardContent>
      </Card>
    );
  } else if (stat === "achieves") {
    return (
      <Card raised className={classes.card}>
        <CardContent>
          <Typography
            variant="title"
            align="center"
            style={{ fontSize: "1em", textDecoration: "underline" }}
          >
            Completed
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="subtitle1" align="center">
            {data}
          </Typography>
        </CardContent>
      </Card>
    );
  }
};

export default withStyles(styles)(Stats);
