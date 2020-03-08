import { combineReducers } from 'redux';

import campaignsReducer from './campaigns_reducer'
import usersReducer from './users_reducer';

export default combineReducers({
  users: usersReducer,
  campaigns: campaignsReducer
});