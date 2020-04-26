class CreateAddVideoToCampaigns < ActiveRecord::Migration[5.2]
  def change
    add_column :campaigns, :video_url, :string, :default => "https://www.youtube.com/watch?time_continue=15&v=V-VbZR0U0Og"
  end
end
