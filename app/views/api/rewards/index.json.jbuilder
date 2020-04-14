@rewards.each do |reward|
  json.set! reward.id do
        json.extract! reward, :id, :name, :description, :min_contribution, :campaign_id
  end
end
