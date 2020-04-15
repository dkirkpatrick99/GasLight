import {
    RECEIVE_ALL_FOLLOWS,
    REMOVE_FOLLOW,
    RECEIVE_FOLLOW
  } from '../actions/follow_actions';


  const followsReducer = (state = {}, action) => {
      Object.freeze(state);
      let nextState = Object.assign({}, state);

      switch (action.type) {
          case RECEIVE_ALL_FOLLOWS:
              nextState = Object.assign({}, state, action.follows);
              return nextState;
          case RECEIVE_FOLLOW:
              nextState = Object.assign({}, state, action.follow)
              return nextState;
          case REMOVE_FOLLOW:
            delete nextState[action.followId]
            return nextState;
          default:
              return state;
      }
  }

  export default followsReducer