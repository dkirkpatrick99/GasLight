export const fetchContributions = () => {
  return $.ajax({
      url: `api/contributions/`,
      method: 'GET'
    })
  };
  
  
  export const createContribution = contribution => {
    return $.ajax({
      url: `api/contributions/`,
      method: 'POST',
      data: { contribution }
    })
  };
  

  
