import React, { Component } from "react";
import axios from "axios";

import "./auth.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/api/users/login", user)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-content">
          <div className="auth-content-header">
            <h1>Log In</h1>
            <p>Log in to your Squalla Disc Golf Account</p>
          </div>
          <form onSubmit={this.onSubmit}>
            <input
              className="register-form-input"
              type="text"
              placeholder="EMAIL"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <input
              className="register-form-input"
              type="password"
              placeholder="PASSWORD"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <input type="submit" className="register-form-button" />
          </form>
          <p>Don't have an account?</p>
          <a href="/register">
            <p>Sign Up Here</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
