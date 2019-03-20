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
  DialogTitle
} from "@material-ui/core";

const FriendDialog = ({ open, close, data }) => {
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
            <Typography align="center">
              Achievement Points: {friend.achievementPoints}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align="center">
              Performance Rating: {friend.performancePoints}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogContent>
        <Table>
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
                <Typography align="center">
                  {friend.recentRound.date}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center">
                  {friend.recentRound.course}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center">
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

export default FriendDialog;
