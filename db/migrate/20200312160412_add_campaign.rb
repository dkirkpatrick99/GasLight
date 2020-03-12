class AddCampaign < ActiveRecord::Migration[5.2]
  def change
    add_column :campaigns, :current_sum, :float, default: 0.0
  end
end
