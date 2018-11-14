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

export default App;
