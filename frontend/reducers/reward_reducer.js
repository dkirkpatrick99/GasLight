import {
    RECEIVE_ALL_REWARDS,
    RECEIVE_REWARD,
    REMOVE_REWARD,
    REWARD_ERROR,
  } from '../actions/reward_actions';


  const rewardsReducer = (state = {}, action) => {
      Object.freeze(state);
      let nextState = Object.assign({}, state);
      switch (action.type) {
          case RECEIVE_ALL_REWARDS:
              nextState = Object.assign({}, state, action.rewards);
              return nextState;
          case RECEIVE_REWARD:
              nextState = Object.assign({}, state, action.reward)
              return nextState;
          case REMOVE_REWARD:
              delete nextState[action.rewardId]
              return nextState;
          case REWARD_ERROR:
              nextState = Object.assign({}, state);
              delete nextState[action.reward.id];
              return nextState;
              
          default:
              return state;
      }
  }

  export default rewardsReducer