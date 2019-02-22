import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  IconButton,
  withStyles
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddCircle";
import { green } from "@material-ui/core/colors";

const styles = theme => ({
  card: {
    width: "100%",
    height: "100%"
  },
  cellHeading: {
    fontWeight: 900,
    padding: 10
  },
  historyButton: {
    width: "100%"
  },
  table: {
    width: "auto",
    margin: "auto"
  },
  cell: {
    paddingLeft: 25,
    paddingRight: 25
  },
  row: {
    width: "auto"
  }
});

const AddCourse = ({ classes, data }) => {
  return (
    <Grid item xs={6} className="addCourseCard">
      <Card className={classes.card}>
        <CardHeader
          title={data.name}
          subheader={`${data.holes} holes`}
          action={
            <IconButton>
              <AddIcon style={{ color: green[400] }} />
            </IconButton>
          }
        />
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(AddCourse);
