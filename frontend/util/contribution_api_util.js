export const fetchContributions = () => (
    $.ajax({
      url: `api/contributions/`
    })
  );
  
  
  export const createContribution = contribution => {
    return $.ajax({
      url: `api/contributions/`,
      method: 'POST',
      data: { contribution }
    })
  };
  

  
