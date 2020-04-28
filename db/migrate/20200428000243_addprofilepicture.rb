class Addprofilepicture < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :photo_url, :string, :default => "profile_saver.png"

  end
end
