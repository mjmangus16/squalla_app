import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  withStyles
} from "@material-ui/core";

import LibraryAddIcon from "@material-ui/icons/LibraryAdd";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "95%",
    maxWidth: 1000,
    margin: "auto"
  },
  heading: {
    textAlign: "center",
    color: "orange",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.75em"
    }
  },
  contentSection: {
    width: "50%"
  }
});

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <h1 className={classes.heading}>
            Welcome to the <br />
            Squalla Disc Golf App!
          </h1>
        </CardContent>
        <CardContent>
          <Grid container spacing={16}>
            <Grid
              item
              xs={12}
              sm={6}
              className="contentItem"
              style={{ color: "#fff" }}
            >
              <section style={{ border: "1px solid black", height: "100%" }}>
                <div style={{ padding: "10px 10%" }}>
                  <Typography
                    variant="headline"
                    style={{ textDecoration: "underline" }}
                  >
                    Features
                  </Typography>
                  <ul>
                    <li>
                      <Typography>Performance Tracking</Typography>
                    </li>
                    <li>
                      <Typography>History of Rounds</Typography>
                    </li>
                    <li>
                      <Typography>Earn Achievements</Typography>
                    </li>
                    <li>
                      <Typography>Track Course Stats</Typography>
                    </li>
                    <li>
                      <Typography>Connect with Friends</Typography>
                    </li>
                  </ul>
                </div>
              </section>
            </Grid>
            <Grid item xs={12} sm={6} className="contentItem">
              <section style={{ border: "1px solid black", height: "100%" }}>
                <div style={{ padding: "10px 10%" }}>
                  <Typography
                    variant="headline"
                    style={{ textDecoration: "underline" }}
                  >
                    Navigation
                  </Typography>
                  <Typography variant="body1" style={{ padding: "10px" }}>
                    Access the menu by clicking the menu button in the top left
                    corner of this page. If you are on a mobile device, you can
                    expand and shrink the menu to better fit the size of your
                    device.
                  </Typography>
                </div>
              </section>
            </Grid>
            <Grid item xs={12} className="contentItem">
              <section style={{ border: "1px solid black", height: "100%" }}>
                <div style={{ padding: "10px 10%" }}>
                  <Typography
                    variant="headline"
                    style={{ textDecoration: "underline" }}
                  >
                    New Users
                  </Typography>
                  <Typography variant="body1" style={{ padding: "10px" }}>
                    For those of you that are using the app for the first time,
                    most of the content will remain blank until you start adding
                    rounds to your profile. You can start adding rounds by
                    finding the <LibraryAddIcon fontSize="small" /> in the menu.
                    As you add more rounds, the app will begin to track and
                    record various data and metrics.
                  </Typography>
                  <Typography variant="body1" style={{ padding: "10px" }}>
                    Until you add your first round, the{" "}
                    <a href="/dashboard" style={{ color: "#fff" }}>
                      dashboard
                    </a>{" "}
                    is filled in with fake data so that you can see what the app
                    will look like as you start to add rounds.
                  </Typography>
                </div>
              </section>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Home);
