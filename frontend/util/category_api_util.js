export const fetchAllCategories = () => {
  return $.ajax({
      url: '/api/categories',
      method: 'GET',
    })
};