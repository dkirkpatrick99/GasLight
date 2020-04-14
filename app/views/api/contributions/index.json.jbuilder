@contributions.each do |contribution|
  json.set! contribution.id do
        json.extract! contribution, :id, :amount, :user_id, :campaign_id
  end
end