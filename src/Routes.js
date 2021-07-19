import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// #PAGES
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Host from './Pages/Host/Host';

// #COMPONENTS
import Nav from './Components/Nav/Nav';

class Routes extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
      
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/host" component={Host} />
            </Switch>
         
        </Router>
      </>
    );
  }
}

export default Routes;