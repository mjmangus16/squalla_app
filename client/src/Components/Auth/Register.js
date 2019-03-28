import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  withStyles
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});

class Register extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    password2: "",
    open: false,
    error: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      if (nextProps.errors.email) {
        this.setState({ open: true, error: nextProps.errors.email });
      } else if (nextProps.errors.username) {
        this.setState({ open: true, error: nextProps.errors.username });
      } else if (nextProps.errors.password) {
        this.setState({ open: true, error: nextProps.errors.password });
      } else if (nextProps.errors.password2) {
        this.setState({ open: true, error: nextProps.errors.password2 });
      }
    }
  }

  onChange = name => e => {
    this.setState({ [name]: e.target.value });
  };

  onSubmit = () => {
    const newUser = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.login);
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { open, close, login, classes } = this.props;
    return (
      <Dialog open={open} onClose={close}>
        <DialogTitle>SIGN UP</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Already have an account?
            <br />
            <Button size="small" onClick={login}>
              Login Here
            </Button>
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            value={this.state.email}
            onChange={this.onChange("email")}
          />
          <TextField
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            value={this.state.username}
            onChange={this.onChange("username")}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={this.state.password}
            onChange={this.onChange("password")}
          />
          <TextField
            margin="dense"
            id="password2"
            label="Confirm Password"
            type="password"
            fullWidth
            value={this.state.password2}
            onChange={this.onChange("password2")}
          />
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            size="large"
            variant="contained"
            color="secondary"
            onClick={this.onSubmit}
          >
            Submit
          </Button>
        </DialogActions>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{this.state.error}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </Dialog>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withStyles(styles)(Register));
