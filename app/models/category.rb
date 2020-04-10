class Category < ApplicationRecord

    validates :title, presence: true 

    has_many :campaigns,
        foreign_key: :category_id,
        class_name: :Campaign
end
