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
  
  export const createCampaign = campaign => (
    $.ajax({
      url: `api/campaigns/`,
      method: 'campaign',
      data: { campaign }
    })
  );
  
  export const updateCampaign = campaign => (
    $.ajax({
      url: `/api/campaigns/${campaign.id}`,
      method: 'patch',
      data: { campaign }
    })
  );
  
  export const deleteCampaign = campaignId => (
    $.ajax({
      url: `/api/campaigns/${campaignId}/`,
      method: 'DELETE'
    })
  )