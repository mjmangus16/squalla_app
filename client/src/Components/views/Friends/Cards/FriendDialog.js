import React from "react";
import {
  Dialog,
  DialogContent,
  Grid,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
  DialogTitle,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  content: {
    [theme.breakpoints.down("xs")]: {
      fontSize: ".75em"
    }
  },
  tableCell: {
    maxWidth: 200,
    [theme.breakpoints.down("xs")]: {
      fontSize: ".75em"
    }
  }
});

const FriendDialog = ({ classes, open, close, data }) => {
  let friend;

  if (!data) {
    friend = {
      username: "User Not Available",
      level: null,
      achievementPoints: null,
      performancePoints: null,
      recentRound: {}
    };
  } else {
    if (Object.keys(data).length > 0) {
      friend = data;
    }
  }
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>{friend.username}</DialogTitle>
      <DialogContent>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography align="center">LEVEL: {friend.level}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align="center" className={classes.content}>
              Achievement Points: {friend.achievementPoints}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align="center" className={classes.content}>
              Performance Rating: {friend.performancePoints}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogContent>
        <Table padding="dense">
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Course</TableCell>
              <TableCell align="center">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography align="center" className={classes.tableCell}>
                  {friend.recentRound.date}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" className={classes.tableCell}>
                  {friend.recentRound.course}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" className={classes.tableCell}>
                  {friend.recentRound.score}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export default withStyles(styles)(FriendDialog);
