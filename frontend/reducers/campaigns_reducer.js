import {
    RECEIVE_ALL_CAMPAIGNS,
    RECEIVE_CAMPAIGN,
    REMOVE_CAMPAIGN,
    CAMPAIGN_ERROR,
  } from '../actions/campaign_action';


  const campaignsReducer = (state = {}, action) => {
      Object.freeze(state);
      let nextState = Object.assign({}, state);

      switch (action.type) {
          case RECEIVE_ALL_CAMPAIGNS:
              nextState = Object.assign({}, state, action.campaigns);
              return nextState;
          case RECEIVE_CAMPAIGN:
              nextState = Object.assign({}, state, action.campaign)
              debugger
              return nextState;
          case REMOVE_CAMPAIGN:
              delete nextState[action.campaignId]
              return nextState;
          case CAMPAIGN_ERROR:
              nextState = Object.assign({}, state);
              delete nextState[action.campaign.id];
              return nextState;
              
          default:
              return state;
      }
  }

  export default campaignsReducer