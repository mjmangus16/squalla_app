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
import InfoIcon from "@material-ui/icons/Info";
import { blue } from "@material-ui/core/colors";

const styles = theme => ({
  card: {
    width: "100%",
    height: "auto"
  },
  cellHeading: {
    fontWeight: 900
  },
  historyButton: {
    width: "100%"
  }
});

const MyCourse = ({ classes }) => {
  return (
    <Grid item xs={12} sm={6} className="myCourseCard">
      <Card className={classes.card}>
        <CardHeader
          title="Joseph Davis State Park"
          subheader="27 holes"
          action={
            <IconButton>
              <InfoIcon style={{ color: blue[400] }} />
            </IconButton>
          }
        />
        <CardContent style={{ paddingTop: 0 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="center">Red</TableCell>
                <TableCell align="center">White</TableCell>
                <TableCell align="center">Blue</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.cellHeading}>Par</TableCell>
                <TableCell align="center">54</TableCell>
                <TableCell align="center">70</TableCell>
                <TableCell align="center">70</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.cellHeading}>Best</TableCell>
                <TableCell align="center">N/A</TableCell>
                <TableCell align="center">61</TableCell>
                <TableCell align="center">N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.cellHeading}>Average</TableCell>
                <TableCell align="center">N/A</TableCell>
                <TableCell align="center">61</TableCell>
                <TableCell align="center">N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.cellHeading}>Rounds</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(MyCourse);
