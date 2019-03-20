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
import DashboardIcon from "@material-ui/icons/Dashboard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListIcon from "@material-ui/icons/List";
import FlagIcon from "@material-ui/icons/Flag";
import PeopleIcon from "@material-ui/icons/People";
import PlaceIcon from "@material-ui/icons/Place";
import PersonIcon from "@material-ui/icons/Person";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import LockOpenIcon from "@material-ui/icons/LockOpen";

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
  notifications
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
      <div className={classes.root}>
        <List component="nav">
          <ListItem button>
            <ListItemIcon className={classes.listItem}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText
              primary={username.toUpperCase()}
              className={classes.menuText}
            />
          </ListItem>
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
                className={classes.menuText}
              />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List component="nav">
          <Link to="/dashboard" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="DASHBOARD" className={classes.menuText} />
            </ListItem>
          </Link>
          <Link to="/performance" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText
                primary="PERFORMANCE"
                className={classes.menuText}
              />
            </ListItem>
          </Link>
          <Link to="/rounds" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="ROUNDS" className={classes.menuText} />
            </ListItem>
          </Link>
          <Link to="/achievements" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <AwardIcon />
              </ListItemIcon>
              <ListItemText
                primary="ACHIEVEMENTS"
                className={classes.menuText}
              />
            </ListItem>
          </Link>
          <Link to="/courses" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <PlaceIcon />
              </ListItemIcon>
              <ListItemText primary="COURSES" className={classes.menuText} />
            </ListItem>
          </Link>
          <Link to="/friends" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="FRIENDS" className={classes.menuText} />
            </ListItem>
          </Link>
          <Link to="/leagues" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                <FlagIcon />
              </ListItemIcon>
              <ListItemText primary="LEAGUES" className={classes.menuText} />
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
              <ListItemText primary="ADD ROUND" className={classes.menuText} />
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
              <ListItemText primary="LOGOUT" className={classes.menuText} />
            </ListItem>
          </Link>
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
      </div>
    );
  }

  return (
    <Drawer
      anchor="left"
      variant="persistent"
      open={!auth ? true : status}
      id="drawer"
    >
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
