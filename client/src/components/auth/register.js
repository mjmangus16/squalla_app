import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

import "./auth.css";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/squallaApp/profile/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email.toLowerCase(),
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="auth-container">
        <div className="auth-content">
          <div className="auth-content-header">
            <h1>Sign Up</h1>
            <p>Create your squalla disc golf account</p>
          </div>
          <form onSubmit={this.onSubmit}>
            <input
              className={classnames("register-form-input", {
                "is-invalid": errors.username
              })}
              type="text"
              placeholder="USERNAME"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
            <input
              className={classnames("register-form-input", {
                "is-invalid": errors.email
              })}
              type="text"
              placeholder="EMAIL"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
            <input
              className={classnames("register-form-input", {
                "is-invalid": errors.password
              })}
              type="password"
              placeholder="PASSWORD"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
            <input
              className={classnames("register-form-input", {
                "is-invalid": errors.password2
              })}
              type="password"
              placeholder="CONFIRM PASSWORD"
              name="password2"
              value={this.state.password2}
              onChange={this.onChange}
            />
            {errors.password2 && (
              <div className="invalid-feedback">{errors.password2}</div>
            )}
            <input type="submit" className="register-form-button" />
          </form>
          <p>Already registered?</p>
          <a href="/login">
            <p>Login Here</p>
          </a>
        </div>
      </div>
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
)(withRouter(Register));
