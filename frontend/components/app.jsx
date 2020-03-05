import React from "react";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    {/* <div>
      <GreetingContainer />
    </div> */}
    <Switch>
      {/* <Route path="/campaigns" component={CampaignContainer} />
      <Route path="/campaigns/:campaignId" component={UserCampainContainer} /> */}
      {/* <Route path="/users/:userId/profile" component={UserProfileContainer} /> */}
      <Route path="/" component={GreetingContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
  
);

export default App;
