import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  IconButton,
  withStyles
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { blue } from "@material-ui/core/colors";

const styles = theme => ({
  card: {
    width: "100%",
    height: "auto"
  }
});

const MyFriend = ({ classes, data, getUserHandler, openDialogHandler }) => {
  return (
    <Grid item xs={12} sm={4} className="myCourseCard">
      <Card className={classes.card}>
        <CardHeader
          title={data}
          action={
            <IconButton
              onClick={() => {
                getUserHandler(data);
                openDialogHandler();
              }}
            >
              <InfoIcon style={{ color: blue[400] }} />
            </IconButton>
          }
        />
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(MyFriend);
