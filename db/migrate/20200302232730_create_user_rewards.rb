class CreateUserRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :user_rewards do |t|
      t.integer :user_id, null: false
      t.integer :contribution_id, null: false
      t.integer :reward_id, null: false
      t.timestamps
    end
  end
end
