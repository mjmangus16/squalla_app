import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Register from "../auth/register";
import Login from "../auth/login";

import Home from "../content/home/home";
import App1 from "../content/home/app/app1";
import App2 from "../content/home/app/app2";
import App3 from "../content/home/app/app3";
import App4 from "../content/home/app/app4";
import Search1 from "../content/home/search/search1";
import Search2 from "../content/home/search/search2";
import Search3 from "../content/home/search/search3";
import Search4 from "../content/home/search/search4";
import Search5 from "../content/home/search/search5";
import DiscSearch from "../content/discSearch/discSearch";

import Dashboard from "../content/app/content/profile/home/dashboard";
import Rounds from "../content/app/content/profile/home/rounds";
import Achievements from "../content/app/content/profile/home/achievements";
import Courses from "../content/app/content/profile/courses/courses";
import AddCourse from "../content/app/content/profile/courses/addCourse";
import Friends from "../content/app/content/profile/friends/friends";
import AddFriend from "../content/app/content/profile/friends/addFriend";

import submitRoundRecent from "../content/app/content/submitRound/recent/recent";
import submitContent from "../content/app/content/submitRound/submit/submitContent";

import "../content/app/app.css";

class Content extends Component {
  render() {
    return (
      <Router>
        <div className="layout-content-container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/app/page1" component={App1} />
          <Route exact path="/home/app/page2" component={App2} />
          <Route exact path="/home/app/page3" component={App3} />
          <Route exact path="/home/app/page4" component={App4} />
          <Route exact path="/home/DiscSearchTool/page1" component={Search1} />
          <Route exact path="/home/DiscSearchTool/page2" component={Search2} />
          <Route exact path="/home/DiscSearchTool/page3" component={Search3} />
          <Route exact path="/home/DiscSearchTool/page4" component={Search4} />
          <Route exact path="/home/DiscSearchTool/page5" component={Search5} />
          <Route exact path="/discSearch" component={DiscSearch} />
          <Route
            exact
            path="/squallaApp/profile/dashboard"
            component={Dashboard}
          />
          <Route exact path="/squallaApp/profile/rounds" component={Rounds} />
          <Route
            exact
            path="/squallaApp/profile/achievements"
            component={Achievements}
          />
          <Route exact path="/squallaApp/profile/courses" component={Courses} />
          <Route
            exact
            path="/squallaApp/profile/courses/add"
            component={AddCourse}
          />
          <Route exact path="/squallaApp/profile/friends" component={Friends} />
          <Route
            exact
            path="/squallaApp/profile/friends/add"
            component={AddFriend}
          />
          <Route
            exact
            path="/squallaApp/submitRound/recent"
            component={submitRoundRecent}
          />
          <Route
            exact
            path="/squallaApp/submitRound/submit"
            component={submitContent}
          />
        </div>
      </Router>
    );
  }
}

export default Content;
