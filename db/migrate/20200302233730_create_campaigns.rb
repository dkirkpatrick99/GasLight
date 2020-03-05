class CreateCampaigns < ActiveRecord::Migration[5.2]
  def change
    create_table :campaigns do |t|
      t.string :title, null: false
      t.string :location, null: false
      t.text :short_description, null: false
      t.text :long_description, null: false
      t.float :goal_amount, null: false
      t.float :end_date, null: false
      t.boolean :goal_status
      t.integer :owner_id, null: false
      t.timestamps
    end
    add_index :campaigns, :title
    add_index :campaigns, :end_date
  end
end
