import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
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

class Login extends Component {
  state = {
    username: "",
    password: "",
    open: false,
    error: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      if (nextProps.errors.username) {
        this.setState({ open: true, error: nextProps.errors.username });
      } else if (nextProps.errors.login) {
        this.setState({ open: true, error: nextProps.errors.login });
      } else if (nextProps.errors.password) {
        this.setState({ open: true, error: nextProps.errors.password });
      }
    }
  }

  onChange = name => e => {
    this.setState({ [name]: e.target.value });
  };

  onSubmit = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginUser(user, this.props.close);
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { open, close, register, classes } = this.props;
    return (
      <Dialog open={open} onClose={close}>
        <DialogTitle>LOGIN</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Don't have an account?
            <br />
            <Button size="small" onClick={register}>
              Sign Up
            </Button>
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
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
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            size="large"
            variant="contained"
            color="secondary"
            onClick={this.onSubmit}
          >
            Login
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withStyles(styles)(Login));
