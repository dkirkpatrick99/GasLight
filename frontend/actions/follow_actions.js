import * as FollowApiUtil from '../util/follow_api_util';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const FOLLOW_ERROR = 'FOLLOW_ERROR';

const receiveAllFollows = follows => ({
  type: RECEIVE_ALL_FOLLOWS,
  follows 
});

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});



const removeFollow = followId => ({
  type: REMOVE_FOLLOW,
  followId
});

export const followError = error => ({
    type: FOLLOW_ERROR,
    error
  })

export const fetchFollows = () => dispatch => {
  return FollowApiUtil.fetchFollows()
    .then(follows => dispatch(receiveAllFollows(follows)))
  
};

export const createFollow = follow => dispatch => {
  return FollowApiUtil.createFollow(follow)
    .then(follow => dispatch(receiveFollow(follow)))
};

export const deleteFollow = followId => dispatch => (
  FollowApiUtil.deleteFollow(followId)
    .then(() => dispatch(removeFollow(followId)))
);