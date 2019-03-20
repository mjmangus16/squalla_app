import React from "react";
import { Dialog, DialogContent, Typography } from "@material-ui/core";

const AddFriendDialog = ({ open, handler, data }) => {
  let content;

  if (!data) {
    content = null;
  } else {
    content = <Typography>{data.friend}</Typography>;
  }

  return (
    <Dialog open={open} onClose={handler}>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

export default AddFriendDialog;
