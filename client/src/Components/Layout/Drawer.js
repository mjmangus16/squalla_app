import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Badge,
  SvgIcon,
  withStyles
} from "@material-ui/core";
import ExpandIcon from "@material-ui/icons/ChevronRight";
import ShrinkIcon from "@material-ui/icons/ChevronLeft";
import DashboardIcon from "@material-ui/icons/Dashboard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListIcon from "@material-ui/icons/List";
import FlagIcon from "@material-ui/icons/Flag";
import PeopleIcon from "@material-ui/icons/People";
import PersonIcon from "@material-ui/icons/Person";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import Settings from "./Settings";

const styles = theme => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      width: 225
    },
    [theme.breakpoints.down("xs")]: {
      width: 55
    },
    marginTop: 64,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  root2: {
    width: 200,
    marginTop: 64,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  menuText: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  listItem: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      margin: "auto"
    }
  },
  navLink: {
    textDecoration: "none"
  },
  drawerExpand: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
});

function AwardIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M15.2,10.7L16.6,16L12,12.2L7.4,16L8.8,10.8L4.6,7.3L10,7L12,2L14,7L19.4,7.3L15.2,10.7M14,19.1H13V16L12,15L11,16V19.1H10A2,2 0 0,0 8,21.1V22.1H16V21.1A2,2 0 0,0 14,19.1Z" />
    </SvgIcon>
  );
}

const DrawerComponent = ({
  classes,
  status,
  auth,
  registerHandler,
  loginHandler,
  logout,
  username,
  notifications,
  drawerExpandStatus,
  drawerExpandHandler,
  settings,
  settingsHandler
}) => {
  let drawerContent;

  let notificationCount = 0;

  if (notifications) {
    if (Object.keys(notifications).length > 0) {
      notificationCount = getNotificationsCount(notifications);
    }
  }

  if (auth) {
    drawerContent = (
      <div
        className={classes.root}
        style={drawerExpandStatus ? { width: 225 } : null}
      >
        <List component="nav">
          {drawerExpandStatus ? (
            <ListItem
              button
              onClick={drawerExpandHandler}
              className={classes.drawerExpand}
            >
              <ListItemIcon className={classes.listItem}>
                <ShrinkIcon />
              </ListItemIcon>
              <ListItemText
                primary="SHRINK"
                className={drawerExpandStatus ? null : classes.menuText}
              />
            </ListItem>
          ) : (
            <ListItem
              button
              onClick={drawerExpandHandler}
              className={classes.drawerExpand}
            >
              <ListItemIcon className={classes.listItem}>
                <ExpandIcon />
              </ListItemIcon>
              <ListItemText
                className={drawerExpandStatus ? null : classes.menuText}
              />
            </ListItem>
          )}
          {/* onClick={settingsHandler} */}
          <Link to="/" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary={username.toUpperCase()}
                className={drawerExpandStatus ? null : classes.menuText}
              />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List component="nav">
          <Link to="/notifications" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <Badge
                  className={classes.margin}
                  badgeContent={notificationCount}
                  color="secondary"
                >
                  <NotificationsIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText
                primary="NOTIFICATIONS"
                className={drawerExpandStatus ? null : classes.menuText}
              />
            </ListItem>
          </Link>
          <Link to="/dashboard" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="DASHBOARD"
                className={drawerExpandStatus ? null : classes.menuText}
              />
            </ListItem>
          </Link>
          <Link to="/performance" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText
                primary="PERFORMANCE"
                className={drawerExpandStatus ? null : classes.menuText}
              />
            </ListItem>
          </Link>
          <Link to="/rounds" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <ListIcon />
              </ListItemIcon>
              <ListItemText
                primary="ROUNDS"
                className={drawerExpandStatus ? null : classes.menuText}
              />
            </ListItem>
          </Link>
          <Link to="/achievements" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <AwardIcon />
              </ListItemIcon>
              <ListItemText
                primary="ACHIEVEMENTS"
                className={drawerExpandStatus ? null : classes.menuText}
              />
            </ListItem>
          </Link>
          <Link to="/courses" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <FlagIcon />
              </ListItemIcon>
              <ListItemText
                primary="COURSES"
                className={drawerExpandStatus ? null : classes.menuText}
              />
            </ListItem>
          </Link>
          <Link to="/friends" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText
                primary="FRIENDS"
                className={drawerExpandStatus ? null : classes.menuText}
              />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List component="nav">
          <Link to="/addround" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <LibraryAddIcon />
              </ListItemIcon>
              <ListItemText
                primary="ADD ROUND"
                className={drawerExpandStatus ? null : classes.menuText}
              />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List component="nav">
          <Link to="/" className={classes.navLink}>
            <ListItem
              button
              onClick={() => {
                logout();
                loginHandler();
              }}
            >
              <ListItemIcon className={classes.listItem}>
                <LockOpenIcon />
              </ListItemIcon>
              <ListItemText
                primary="LOGOUT"
                className={drawerExpandStatus ? null : classes.menuText}
              />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List
          component="nav"
          className={drawerExpandStatus ? null : classes.menuText}
        >
          <a
            href="https://www.squalladgdiscsearch.com"
            target="_blank"
            className={classes.navLink}
          >
            <ListItem button>
              <ListItemText primary="DISC SEARCH" />
            </ListItem>
          </a>
          <a
            href="https://www.squalladgcoursesearch.com"
            target="_blank"
            className={classes.navLink}
          >
            <ListItem button>
              <ListItemText primary="COURSE SEARCH" />
            </ListItem>
          </a>
        </List>
      </div>
    );
  } else {
    drawerContent = (
      <div className={classes.root2}>
        <List component="nav">
          <ListItem button onClick={registerHandler}>
            <ListItemIcon className={classes.listItem}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="SIGN UP" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <Link to="#" className={classes.navLink}>
            <ListItem button onClick={loginHandler}>
              <ListItemIcon className={classes.listItem}>
                <LockOpenIcon />
              </ListItemIcon>
              <ListItemText primary="LOGIN" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List
          component="nav"
          className={drawerExpandStatus ? null : classes.menuText}
        >
          <a
            href="https://www.squalladgdiscsearch.com"
            target="_blank"
            className={classes.navLink}
          >
            <ListItem button>
              <ListItemText primary="DISC SEARCH" />
            </ListItem>
          </a>
          <a
            href="https://www.squalladgcoursesearch.com"
            target="_blank"
            className={classes.navLink}
          >
            <ListItem button>
              <ListItemText primary="COURSE SEARCH" />
            </ListItem>
          </a>
        </List>
      </div>
    );
  }

  return (
    <Drawer anchor="left" variant="persistent" open={status} id="drawer">
      <Settings settings={settings} settingsHandler={settingsHandler} />
      {drawerContent}
    </Drawer>
  );
};

export default withStyles(styles)(DrawerComponent);

const getNotificationsCount = notifications => {
  let sum = 0;
  sum =
    notifications.rounds.length +
    notifications.checkins.length +
    notifications.other.length;

  return sum;
};
