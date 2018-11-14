import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home/home";
import Search1 from "./home/search/search1";
import Search2 from "./home/search/search2";
import Search3 from "./home/search/search3";
import Search4 from "./home/search/search4";
import Search5 from "./home/search/search5";

import App1 from "./home/app/app1";
import App2 from "./home/app/app2";
import App3 from "./home/app/app3";
import App4 from "./home/app/app4";

import "./content.css";

const content = () => {
  return (
    <Router>
      <div className="content-container">
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/DiscSearchTool/page1" component={Search1} />
        <Route exact path="/home/DiscSearchTool/page2" component={Search2} />
        <Route exact path="/home/DiscSearchTool/page3" component={Search3} />
        <Route exact path="/home/DiscSearchTool/page4" component={Search4} />
        <Route exact path="/home/DiscSearchTool/page5" component={Search5} />
        <Route exact path="/home/app/page1" component={App1} />
        <Route exact path="/home/app/page2" component={App2} />
        <Route exact path="/home/app/page3" component={App3} />
        <Route exact path="/home/app/page4" component={App4} />
      </div>
    </Router>
  );
};

export default content;
