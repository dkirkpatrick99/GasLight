
export const fetchCampaigns = () => (
    $.ajax({
      url: `api/campaigns/`
    })
  );
  
  export const fetchCampaign = campaignId => (
    $.ajax({
      url: `/api/campaigns/${campaignId}/`
    })
  );

  export const searchCampaigns = string => (
    $.ajax({
      url: `/api/campaigns/search/${string}`,
      method: 'GET',
    })
  );
  
  export const createCampaign = campaign => (
    $.ajax({
      url: `api/campaigns/`,
      method: 'POST',
      data: { campaign }
    })
  );
  
  export const updateCampaign = campaign => (
    $.ajax({
      url: `/api/campaigns/${campaign.id}`,
      method: 'Patch',
      data: { campaign }
    })
  );
  
  export const deleteCampaign = campaignId => (
    $.ajax({
      url: `/api/campaigns/${campaignId}/`,
      method: 'DELETE'
    })
  )