import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./components/layout/layout";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout />
        </div>
      </Router>
    );
  }
}

// <Route exact path="/" component={ Landing } />

export default App;
