import * as CampaignApiUtil from '../util/campaign_api_util';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_ALL_CAMPAIGNS = 'RECEIVE_ALL_CAMPAIGNS';
export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
export const REMOVE_CAMPAIGN = 'REMOVE_CAMPAIGN';
export const CAMPAIGN_ERROR = 'CAMPAIGN_ERROR';

const receiveAllCampaigns = campaigns => ({
  type: RECEIVE_ALL_CAMPAIGNS,
  campaigns 
});

const receiveCampaign = campaign => ({
  type: RECEIVE_CAMPAIGN,
  campaign
});

const removeCampaign = campaignId => ({
  type: REMOVE_CAMPAIGN,
  campaignId
});

export const campaignError = error => ({
    type: CAMPAIGN_ERROR,
    error
  })

export const fetchCampaigns = () => dispatch => {
  return CampaignApiUtil.fetchCampaigns()
    .then(campaigns => dispatch(receiveAllCampaigns(campaigns)))
  
};

export const fetchCampaign = campaignId => dispatch => (
  CampaignApiUtil.fetchCampaign(campaignId)
    .then(campaign => dispatch(receiveCampaign(campaign)))
);

export const createCampaign = campaign => dispatch => {
  return CampaignApiUtil.createCampaign(campaign)
    .then(campaign => dispatch(receiveCampaign(campaign)))
};

// export const createCampaign = campaign => dispatch => (
//       CampaignApiUtil.createCampaign(campaign)
//         .then(campaign => { dispatch(receiveCampaign(campaign)), dispatch(clearErrors())}, 
//         err => dispatch(receiveErrors(err.responseJSON)))
//     );

export const updateCampaign = campaign => dispatch => (
  CampaignApiUtil.updateCampaign(campaign)
    .then(campaign => dispatch(receiveCampaign(campaign)))
);

export const deleteCampaign = campaignId => dispatch => (
  CampaignApiUtil.deleteCampaign(campaignId)
    .then(() => dispatch(removeCampaign(campaignId)))
);