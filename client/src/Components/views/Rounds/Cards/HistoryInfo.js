import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  DialogTitle
} from "@material-ui/core";

const HistoryInfo = ({ dialogOpen, dialogClose }) => {
  return (
    <Dialog open={dialogOpen} onClose={dialogClose}>
      <DialogTitle>Joseph Davis State Park</DialogTitle>

      <DialogContent style={{ width: 300 }}>
        <Typography>Date: 2/14/19</Typography>
        <Typography>Tees: Blue</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">Player1</TableCell>
              <TableCell align="center">55</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Player1</TableCell>
              <TableCell align="center">55</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Player1</TableCell>
              <TableCell align="center">55</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Player1</TableCell>
              <TableCell align="center">55</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export default HistoryInfo;
