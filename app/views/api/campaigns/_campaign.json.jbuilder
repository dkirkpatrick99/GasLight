json.set! campaign.id do 
    json.extract! campaign, :id, :title, :location, :short_description, :long_description, :goal_amount, :end_date, :owner_id
    json.photoUrl url_for(campaign.photo)
end