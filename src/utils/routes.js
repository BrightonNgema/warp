import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from 'pages';

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route component={Home} />
        </Switch>
    </Router>
);
