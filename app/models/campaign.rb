class Campaign < ApplicationRecord
    validates :goal_status, inclusion: {in: [true, false]}
    validates :title, :location, :short_description, :long_description, presence: true 
    validates :goal_amount, :end_date, :current_sum, presence: true

    belongs_to :category,
        foreign_key: :category_id,
        class_name: :Category

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :contributions,
        foreign_key: :campaign_id,
        class_name: :Contribution

    has_many :followers,
        foreign_key: :campaign_id,
        class_name: :Follow

    has_one_attached :photo

    def add_contribution(amount)
        self.current_sum += amount
        self.save
    end

    def funding_percent 
        percent = ((self.current_sum/goal_amount)*100).round
        return "0" if percent == 0
        result = []
        while percent > 0
            sub = (percent % 1000).to_s
            while sub.length < 3 && percent > 999
                sub = "0" + sub
            end
            result.unshift(sub)
            percent /= 1000
        end
        result = result.join(",")
        result
    end

    def num_to_dollars(num)
        num = num.to_i
        return "0.00" if num == 0
        result = []
        while num > 0 
            sub = (num % 1000).to_s
            while sub.length < 3 && num > 999
                sub = "0" + sub
            end
            result.unshift(sub)
            num /= 1000
        end
        result = result.join(",") + ".00"
        result
    end

    def sum_to_dollars
        num_to_dollars(self.current_sum)
      end
    
      def goal_to_dollars
        num_to_dollars(self.goal_amount)
      end

end
