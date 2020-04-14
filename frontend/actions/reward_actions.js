import * as RewardApiUtil from '../util/reward_api_util';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_ALL_REWARDS = 'RECEIVE_ALL_REWARDS';
export const RECEIVE_REWARD = 'RECEIVE_REWARD';
export const REMOVE_REWARD = 'REMOVE_REWARD';
export const REWARD_ERROR = 'REWARD_ERROR';

const receiveAllRewards = rewards => ({
  type: RECEIVE_ALL_REWARDS,
  rewards 
});

const receiveReward = reward => ({
  type: RECEIVE_REWARD,
  reward
});

const removeReward = rewardId => ({
  type: REMOVE_REWARD,
  rewardId
});

export const rewardError = error => ({
    type: REWARD_ERROR,
    error
  })

export const fetchRewards = () => dispatch => {
  return RewardApiUtil.fetchRewards()
    .then(rewards => dispatch(receiveAllRewards(rewards)))
  
};

export const fetchReward = rewardId => dispatch => (
  RewardApiUtil.fetchReward(rewardId)
    .then(reward => dispatch(receiveReward(reward)))
);

export const createReward = reward => dispatch => {
  return RewardApiUtil.createReward(reward)
    .then(reward => dispatch(receiveReward(reward)))
};

// export const createreward = reward => dispatch => (
//       RewardApiUtil.createreward(reward)
//         .then(reward => { dispatch(receiveReward(reward)), dispatch(clearErrors())}, 
//         err => dispatch(receiveErrors(err.responseJSON)))
//     );

export const updatereward = reward => dispatch => (
  RewardApiUtil.updatereward(reward)
    .then(reward => dispatch(receiveReward(reward)))
);

export const deleteReward = rewardId => dispatch => (
  RewardApiUtil.deleteReward(rewardId)
    .then(() => dispatch(removeReward(rewardId)))
);