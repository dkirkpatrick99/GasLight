class Api::CampaignsController < ApplicationController
    def new
        @campaign = Campaign.new
    end

    def create
        @campaign = current_user.campaigns.new(campaign_params)
        if @campaign.save
            render :show
        else
            render json: @campaign.errors.full_messages, status: 422
        end
    end

    def index
        @campaigns = Campaign.all
        render :index
    end

    def show
        @campaign = Campaign.find(params[:id])
        render :show
    end

    def update
        @campaign = Campaign.find(params[:id])
        if @campaign.update(campaign_params)
            render :show
        else
            render json: @campaign.full_messages, status: 422
        end
    end

    def destroy
        @campaign = Campaign.find(params[:id])
        @campaign.destroy
        render json: @campaign
    end

    private
    def campaign_params
        params.require(:campaign).permit(:title, :location, :short_description, :long_description,
            :goal_amount, :end_date, :goal_status, :owner_id)
    end
end