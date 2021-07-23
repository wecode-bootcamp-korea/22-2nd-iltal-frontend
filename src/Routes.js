import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// #PAGES
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Manual from './Pages/Host/Manual/Manual';
import RegistrationContextWrapper from './Pages/Host/Registration/Registration';
import Detail from './Pages/Detail/Detail';
import EmailLogin from './Pages/EmailLogin/EmailLogin';

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
          <Route exact path="/Registration" component={RegistrationContextWrapper} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/products/public/:id" component={Detail} />
          <Route exact path="/products/private/:id" component={Detail} />
          <Route exact path="/email-login" component={EmailLogin} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
