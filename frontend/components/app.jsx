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
import ShowCampaignContainer from "./show_campaign/show_campaign_container"
import CreateCampaignContainer from './create_campaign/create_campaign_container'
import IndexCampaignContainer from "./index_campaigns/index_campaigns_container"
import NavBar from "./NavBar/nav_bar_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <div>
      <NavBar />
    </div>
    <Switch>
      {/* <Route path="/campaigns" component={CampaignContainer} />
      <Route path="/campaigns/:campaignId" component={UserCampainContainer} /> */}
      {/* <Route path="/users/:userId/profile" component={UserProfileContainer} /> */}
      <Route exact path="/campaigns" component={IndexCampaignContainer} />
      <Route exact path="/campaigns/new" component={CreateCampaignContainer} />
      <Route exact path="/campaigns/:campaignId" component={ShowCampaignContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route path="/" component={GreetingContainer} />
    </Switch>
  </div>
  
);

export default App;
