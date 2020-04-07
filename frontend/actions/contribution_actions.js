import * as ContributionApiUtil from '../util/contribution_api_util';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_ALL_CONTRIBUTIONS = 'RECEIVE_ALL_CONTRIBUTIONS';
export const RECEIVE_CONTRIBUTION = 'RECEIVE_CONTRIBUTION';


const receiveAllContributions = contributions => ({
    type: RECEIVE_ALL_CONTRIBUTIONS,
    contributions 
  });
  
const receiveContribution = contribution => ({
    type: RECEIVE_CONTRIBUTION,
    contribution
  });


export const fetchContributions = () => dispatch => {
    return ContributionApiUtil.fetchContributions()
      .then(contributions => dispatch(receiveAllContributions(contributions)))
    
  };
  
  export const createContribution = contribution => dispatch => {
    return ContributionApiUtil.createContribution(contribution)
      .then(contribution => dispatch(receiveContribution(contribution)))
  };