import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  card: {
    width: "100%",
    height: 325
  },
  tableWrapper: {
    overflowX: "auto",
    paddingTop: 0
  },
  table: {
    minWidth: 400
  }
});

const Rounds = ({ classes }) => {
  return (
    <Card className={classes.card}>
      <CardHeader title="Rounds" subheader="21 Rounds Played" />
      <CardContent className={classes.tableWrapper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Course</TableCell>
              <TableCell align="center">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ overflow: "Scroll" }}>
            <TableRow>
              <TableCell align="center">2/9/18</TableCell>
              <TableCell align="center" className={classes.courseName}>
                Joseph Davis State Park
              </TableCell>
              <TableCell align="center">79</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">2/9/18</TableCell>
              <TableCell align="center">Joseph Davis State Park</TableCell>
              <TableCell align="center">79</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">2/9/18</TableCell>
              <TableCell align="center">Joseph Davis State Park</TableCell>
              <TableCell align="center">79</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Rounds);
