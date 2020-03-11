import React from "react";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import ShowCampaignContainer from "./show_campaign/show_campaign_container"
import CreateCampaignContainer from './campaign_form/create_campaign_container'
import IndexCampaignContainer from "./index_campaigns/index_campaigns_container"
import NavBar from "./NavBar/nav_bar_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from './modal/modal'
import SessionForm from "./session_form/session_form";
import EditCampaignContainer from './campaign_form/edit_campaign_container'


const App = () => (
  <div>
    <div>
      <NavBar />
      <ModalContainer />
    </div>
    <Switch>
      {/* <Route path="/campaigns" component={CampaignContainer} />
      <Route path="/campaigns/:campaignId" component={UserCampainContainer} /> */}
      {/* <Route path="/users/:userId/profile" component={UserProfileContainer} /> */}
      <Route exact path="/campaigns" component={IndexCampaignContainer} />
      <Route exact path="/campaigns/edit" component={EditCampaignContainer} />
      <Route exact path="/campaigns/new" component={CreateCampaignContainer} />
      <Route exact path="/campaigns/:campaignId" component={ShowCampaignContainer} />
      <Route path="/" component={GreetingContainer} />
    </Switch>
  </div>
  
);

export default App;
