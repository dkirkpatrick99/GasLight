class ChangeCategory < ActiveRecord::Migration[5.2]
  def change
    change_column :campaigns, :category_id, :integer, null: false
  end
end
