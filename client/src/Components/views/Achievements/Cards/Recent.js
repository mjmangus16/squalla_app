import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  card: {
    width: "100%",
    height: 215
  }
});

const Recent = ({ classes }) => {
  return (
    <Card raised className={classes.card}>
      <CardHeader title="Recent" />
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Course</TableCell>
              <TableCell align="center">Achievements</TableCell>
              <TableCell align="center">Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">2/14/18</TableCell>
              <TableCell align="center">Joseph Davis State Park</TableCell>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">7</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Recent);
