import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { green } from "@material-ui/core/colors";

const styles = theme => ({
  flex: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.15em"
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    flexWrap: "flex",
    padding: 0,
    backgroundColor: green[900]
  },
  menuIcon: {
    marginLeft: 4
  }
});

const Header = ({ classes, drawerToggle }) => {
  return (
    <AppBar className={classes.appBar} style={{ maxWidth: "100%" }}>
      <Toolbar className={classes.toolbar} disableGutters>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={drawerToggle}
          className={classes.menuIcon}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="headline" color="inherit" className={classes.flex}>
          Squalla Disc Golf App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
