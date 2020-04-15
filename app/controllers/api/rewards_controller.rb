class Api::RewardsController < ApplicationController
    def new
        @reward = Reward.new
    end

    def create
        @reward = Reward.new(reward_params)
        if @reward.save
            render :show
        else
            render json: @reward.errors.full_messages, status: 422
        end
    end

    def show
        @reward = Reward.find(params[:id])
        render :show
    end

    def index
        @rewards = Reward.all
        render :index
    end

    def update
        @reward = Reward.find(params[:id])
        if @reward.update(reward_params)
            render :show
        else
            render json: @reward.full_messages, status: 422
        end
    end

    def destroy
        @reward = Reward.find(params[:id])
        @reward.destroy
        render json: @reward
    end

    private
    def reward_params
        params.require(:reward).permit(:name, :description, :min_contribution, :campaign_id)
    end
end
