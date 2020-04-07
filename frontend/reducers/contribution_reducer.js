import {
    RECEIVE_ALL_CONTRIBUTIONS,
    RECEIVE_CONTRIBUTION,
  } from '../actions/contribution_actions';


  const contributionsReducer = (state = {}, action) => {
      Object.freeze(state);
      let nextState = Object.assign({}, state);

      switch (action.type) {
          case RECEIVE_ALL_CONTRIBUTIONS:
              nextState = Object.assign({}, state, action.contributions);
              return nextState;
          case RECEIVE_CONTRIBUTION:
              nextState = Object.assign({}, state, action.contribution)
              return nextState;
              
          default:
              return state;
      }
  }

  export default contributionsReducer