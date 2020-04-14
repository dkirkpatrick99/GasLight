export const createfollow = follow => (
    $.ajax({
      url: `api/follows/`,
      method: 'POST',
      data: { follow }
    })
  );

  export const deletefollow = followId => (
    $.ajax({
      url: `/api/follows/${followId}/`,
      method: 'DELETE'
    })
  )