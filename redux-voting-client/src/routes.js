import React from "react";
import {Route, IndexRoute} from "react-router";

import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={VotingContainer}></IndexRoute>
        <Route path="/results" component={ResultsContainer}></Route>
    </Route>
);