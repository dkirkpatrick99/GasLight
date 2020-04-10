import * as CategoryAPIUtil from '../util/category_api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

export const requestCategories = () => dispatch => (
  CategoryAPIUtil.fetchAllCategories().then(categories => (
    dispatch(receiveCategories(categories))
  ))
);