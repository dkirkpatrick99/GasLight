import merge from 'lodash/merge';

import { RECEIVE_CATEGORIES } from '../actions/category_action';

const categoryReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      const categories = {};
      action.categories.forEach(category => categories[category.id] = category);
      return merge({}, state, categories);
    default:
      return state;
  }
};

export default categoryReducer;
