@campaigns.each do |campaign|
  json.set! campaign.id do
        json.extract! campaign, :id, :title, :location, :short_description, :long_description, :goal_amount, :end_date, :owner_id, :current_sum, :category_id
        json.photoUrl url_for(campaign.photo)
        json.funding_percent campaign.funding_percent
        json.goal_in_dollars campaign.goal_to_dollars
        json.sum_in_dollars campaign.sum_to_dollars
  end
end

