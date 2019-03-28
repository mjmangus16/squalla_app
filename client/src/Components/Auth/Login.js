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
  DialogTitle
} from "@material-ui/core";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

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

  render() {
    const { open, close, register } = this.props;
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
            id="name"
            label="Username"
            type="text"
            fullWidth
            value={this.state.username}
            onChange={this.onChange("username")}
          />
          <TextField
            margin="dense"
            id="name"
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
)(Login);
