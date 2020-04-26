class Changevideourl < ActiveRecord::Migration[5.2]
  def change
    change_column :campaigns, :video_url, :string, :default => "https://www.youtube.com/embed/V-VbZR0U0Og"
  end
end
