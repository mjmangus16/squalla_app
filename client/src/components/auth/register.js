import React, { Component } from "react";
import axios from "axios";

import "./auth.css";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-content">
          <div className="auth-content-header">
            <h1>Sign Up</h1>
            <p>Create your squalla disc golf account</p>
          </div>
          <form onSubmit={this.onSubmit}>
            <input
              className="register-form-input"
              type="text"
              placeholder="USERNAME"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
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
            <input
              className="register-form-input"
              type="password"
              placeholder="CONFIRM PASSWORD"
              name="password2"
              value={this.state.password2}
              onChange={this.onChange}
            />
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

export default Register;
