@campaigns.each do |campaign|
        json.partial! "api/campaigns/campaign" , campaign: campaign
end