class Campaign < ApplicationRecord


    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :contributions,
        foreign_key: :campaign_id,
        class_name: :Contribution

    has_one_attached :photo

    has_one_attached :video
end
