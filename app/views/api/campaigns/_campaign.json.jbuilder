json.set! campaign.id do 
    json.extract! campaign, :id, :title, :location, :short_description, :long_description, :goal_amount, :end_date, :owner_id
end