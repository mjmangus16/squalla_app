import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  withStyles
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { blue, orange } from "@material-ui/core/colors";

const styles = theme => ({
  card: {
    width: "100%",
    height: "100%"
  },
  cellHeading: {
    fontWeight: 900,
    [theme.breakpoints.down("sm")]: {
      fontSize: ".75em"
    }
  },
  historyButton: {
    width: "100%"
  },
  header: {
    [theme.breakpoints.down("sm")]: {
      fontSize: ".75em"
    }
  },
  details: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    margin: "auto",
    width: "90%"
  },
  detailsHeading: {
    textDecoration: "underline",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".6em"
    }
  },
  detailsContent: {
    paddingTop: 5,
    [theme.breakpoints.down("sm")]: {
      fontSize: ".6em"
    }
  },
  orangeText: {
    color: orange[500]
  },
  courseLink: {
    color: "lightgrey",
    fontSize: ".75em",
    cursor: "pointer"
  }
});

const MyCourse = ({ classes, data, editCourseHandler }) => {
  return (
    <Grid item xs={12} md={6} className="myCourseCard">
      <Card raised className={classes.card}>
        <CardHeader
          title={data.name}
          subheader={`${data.city}, ${data.state}`}
          action={
            <IconButton onClick={() => editCourseHandler(data)}>
              <EditIcon style={{ color: blue[300] }} />
            </IconButton>
          }
        />
        <CardContent>
          <div className={classes.details}>
            <Typography
              align="center"
              variant="subheading"
              className={classes.detailsHeading}
            >
              Length
            </Typography>
            <Typography
              align="center"
              variant="subheading"
              className={classes.detailsHeading}
            >
              Holes
            </Typography>
            <Typography
              align="center"
              variant="subheading"
              className={classes.detailsHeading}
            >
              Foliage
            </Typography>
            <Typography
              align="center"
              variant="subheading"
              className={classes.detailsHeading}
            >
              Elevation
            </Typography>
            <Typography
              align="center"
              variant="subheading"
              className={classes.detailsHeading}
            >
              Rounds
            </Typography>
            <Typography align="center" className={classes.detailsContent}>
              {data.distance}
            </Typography>
            <Typography align="center" className={classes.detailsContent}>
              {data.holes}
            </Typography>
            <Typography align="center" className={classes.detailsContent}>
              {data.foliage}
            </Typography>
            <Typography align="center" className={classes.detailsContent}>
              {data.elevation}
            </Typography>
            <Typography align="center" className={classes.detailsContent}>
              {data.totalRounds}
            </Typography>
          </div>
        </CardContent>
        <CardContent
          style={{
            paddingTop: 0,
            overflow: "auto",
            maxWidth: 500,
            margin: "auto"
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="dense" />
                {data.tees.map(tee => (
                  <TableCell
                    padding="dense"
                    align="center"
                    style={{ textTransform: "capitalize" }}
                    key={`pin${data.tees.indexOf(tee)}`}
                  >
                    {tee.tee}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell padding="dense" className={classes.cellHeading}>
                  Par
                </TableCell>
                {data.tees.map(tee => (
                  <TableCell
                    padding="dense"
                    align="center"
                    key={`par${data.tees.indexOf(tee)}`}
                    className={tee.par !== "N/A" ? classes.orangeText : null}
                  >
                    {tee.par}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell padding="dense" className={classes.cellHeading}>
                  Best
                </TableCell>
                {data.tees.map(tee => (
                  <TableCell
                    padding="dense"
                    align="center"
                    key={`best${data.tees.indexOf(tee)}`}
                    className={tee.best !== "" ? classes.orangeText : null}
                  >
                    {tee.best === "" ? "N/A" : tee.best}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell padding="dense" className={classes.cellHeading}>
                  Average
                </TableCell>
                {data.tees.map(tee => (
                  <TableCell
                    padding="dense"
                    align="center"
                    key={`average${data.tees.indexOf(tee)}`}
                    className={tee.average !== "" ? classes.orangeText : null}
                  >
                    {tee.average === "" ? "N/A" : tee.average}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell padding="dense" className={classes.cellHeading}>
                  Rounds
                </TableCell>
                {data.tees.map(tee => (
                  <TableCell
                    padding="dense"
                    align="center"
                    key={`rounds${data.tees.indexOf(tee)}`}
                    className={tee.rounds !== 0 ? classes.orangeText : null}
                  >
                    {tee.rounds}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardContent>
          <a
            href={`https://www.pdga.com/node/${data.course_node_nid}`}
            target="_blank"
            className={classes.courseLink}
          >
            PDGA Course Link
          </a>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(MyCourse);
