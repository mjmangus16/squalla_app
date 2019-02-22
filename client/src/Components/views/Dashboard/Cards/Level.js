import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  LinearProgress,
  withStyles
} from "@material-ui/core";
import { grey, blue } from "@material-ui/core/colors";

const styles = theme => ({
  card: {
    width: "100%",
    height: 90
  },
  progressBar: {
    backgroundColor: grey[400],
    height: 20,
    width: "75%",
    margin: "auto"
  }
});

class Level extends Component {
  state = {
    completed: 50
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            style={{ textAlign: "center" }}
          >
            Level: 6
          </Typography>
          <LinearProgress
            variant="determinate"
            value={this.state.completed}
            className={classes.progressBar}
            color="secondary"
          />
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Level);
