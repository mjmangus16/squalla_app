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
  DialogTitle
} from "@material-ui/core";

class Register extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    password2: "",
    errors: {}
  };

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

  render() {
    const { open, close, login } = this.props;
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
)(Register);
