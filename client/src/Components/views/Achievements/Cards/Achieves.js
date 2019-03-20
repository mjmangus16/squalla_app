import React, { Component, Fragment } from "react";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  withStyles
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { orange } from "@material-ui/core/colors";

const styles = theme => ({
  card: {
    width: "100%",
    height: 500
  },
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    paddingLeft: 25
  },
  earned: {
    color: "orange",
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  }
});

class Achieves extends Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes, data } = this.props;
    const { expanded } = this.state;

    let achievesContent = data.map(achievement => (
      <ExpansionPanel
        key={data.indexOf(achievement)}
        expanded={expanded === `panel${data.indexOf(achievement)}`}
        onChange={this.handleChange(`panel${data.indexOf(achievement)}`)}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            className={classes.heading}
            style={achievement.count > 0 ? { color: orange[400] } : null}
          >
            {achievement.name}
          </Typography>
          <Typography
            className={classes.secondaryHeading}
            style={achievement.count > 0 ? { color: orange[200] } : null}
          >
            Worth {achievement.points} Points
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Description: {achievement.description}</Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Typography>
            Earned: {achievement.count} times for{" "}
            {achievement.count * achievement.points} total points
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ));

    return <Fragment>{achievesContent}</Fragment>;
  }
}

export default withStyles(styles)(Achieves);
