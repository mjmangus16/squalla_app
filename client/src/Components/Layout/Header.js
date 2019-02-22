import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
  flex: {
    flex: 1,
    paddingLeft: 15,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em"
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    flexWrap: "flex"
  },
  menuButton: {
    marginRight: 20
  }
});

const Header = ({ classes, drawerToggle }) => {
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={drawerToggle}
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
