import React from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import CNavBar from './components/CNavBar';

export default function Routes() {
  return (
    <Router>
        <CNavBar />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/details" component={DetailsPage} />
        </Switch>
    </Router>
  );
}
