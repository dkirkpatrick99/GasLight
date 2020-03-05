class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.float :min_contribution, null: false
      t.integer :campaign_id, null: false
      t.timestamps
    end
  end
end
