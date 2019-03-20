import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
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
  tableContainer: {
    overflow: "auto"
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

const AddCourse = ({ classes, data, addCourseHandler }) => {
  const getDistance = (distances, holes) => {
    let distance;

    if (distances.course) {
      distances.course = Math.round(distances.course / holes);
    } else {
      distances.course = "N/A";
    }

    if (distances.alternate) {
      distances.alternate = Math.round(distances.alternate / holes);
    } else {
      distances.alternate = "N/A";
    }

    if (distances.course > 0 && distances.alternate > 0) {
      if (distances.course > distances.alternate) {
        distance = distances.course;
      } else {
        distance = distances.alternate;
      }
    } else if (distances.course > 0) {
      distance = distances.course;
    } else if (distances.alternate > 0) {
      distance = distances.alternate;
    } else {
      distance = "N/A";
    }

    if (distance <= 140) {
      return "Very Short";
    } else if (distance > 140 && distance <= 280) {
      return "Short";
    } else if (distance > 280 && distance <= 420) {
      return "Medium";
    } else if (distance > 420 && distance <= 560) {
      return "Long";
    } else if (distance > 560) {
      return "Very Long";
    } else {
      return "N/A";
    }
  };

  return (
    <Grid item xs={12} md={6} className="addCourseCard">
      <Card className={classes.card}>
        <CardHeader
          title={data.course_name}
          subheader={`${data.city}, ${data.state_province}`}
          action={
            <IconButton
              onClick={() =>
                addCourseHandler(
                  data,
                  getDistance(
                    {
                      course: data.total_length_of_course,
                      alternate: data.total_length_of_alternate
                    },
                    data.holes
                  )
                )
              }
            >
              <AddIcon style={{ color: green[400] }} />
            </IconButton>
          }
        />
        <CardContent
          style={{ paddingTop: 0 }}
          className={classes.tableContainer}
        >
          <Table padding="dense">
            <TableHead>
              <TableRow>
                <TableCell align="center">Holes</TableCell>
                <TableCell align="center">Length</TableCell>
                <TableCell align="center">Foliage</TableCell>
                <TableCell align="center">Elevation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">{data.holes}</TableCell>
                <TableCell align="center">
                  {getDistance(
                    {
                      course: data.total_length_of_course,
                      alternate: data.total_length_of_alternate
                    },
                    data.holes
                  )}
                </TableCell>
                <TableCell align="center">
                  {data.course_foliage ? data.course_foliage : "N/A"}
                </TableCell>
                <TableCell align="center">
                  {data.course_elevation ? data.course_elevation : "N/A"}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(AddCourse);
