import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home/home";

import "./content.css";

const content = () => {
  return (
    <Router>
      <div className="content-container">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};

export default content;
