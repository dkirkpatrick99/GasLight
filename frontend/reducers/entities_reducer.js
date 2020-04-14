import { combineReducers } from 'redux';

import campaignsReducer from './campaigns_reducer';
import usersReducer from './users_reducer';
import contributionsReducer from './contribution_reducer';
import categoryReducer from './category_reducer';
import searchReducer from './search_reducer'
import rewardsReducer from './reward_reducer'
import followsReducer from './follows_reducer'

export default combineReducers({
  users: usersReducer,
  campaigns: campaignsReducer,
  contributions: contributionsReducer,
  categories: categoryReducer,
  searchResults: searchReducer,
  rewards: rewardsReducer,
  follows: followsReducer
});