import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  DialogTitle
} from "@material-ui/core";

const HistoryInfo = ({ dialogOpen, dialogClose, data }) => {
  let dialogContent;

  if (!data) {
    dialogContent = null;
  } else {
    if (Object.keys(data).length > 0) {
      dialogContent = (
        <Dialog open={dialogOpen} onClose={dialogClose}>
          <DialogTitle>{data.course ? data.course : "N/A"}</DialogTitle>

          <DialogContent style={{ width: 300 }}>
            <Typography>Date: {data.date}</Typography>
            <Typography style={{ textTransform: "capitalize" }}>
              Tees: {data.tees}
            </Typography>
            <Typography style={{ textTransform: "capitalize" }}>
              Owner: {data.owner}
            </Typography>
            <Typography>
              League: {data.league ? data.league : "Non-League"}
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="dense" align="center">
                    Username
                  </TableCell>
                  <TableCell padding="dense" align="center">
                    Score
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.scores.map(score => (
                  <TableRow key={data.scores.indexOf(score)}>
                    <TableCell padding="dense" align="center">
                      {score.username}
                    </TableCell>
                    <TableCell padding="dense" align="center">
                      {score.score}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContent>
        </Dialog>
      );
    }
  }

  return dialogContent;
};

export default HistoryInfo;
