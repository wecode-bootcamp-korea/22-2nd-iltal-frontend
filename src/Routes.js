import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// #PAGES
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Manual from './Pages/Host/Manual/Manual';
import Registration from './Pages/Host/Registration/Registration';

// #COMPONENTS
import Nav from './Components/Nav/Nav';

function Routes() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/Manual" component={Manual} />
          <Route exact path="/Registration" component={Registration} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
