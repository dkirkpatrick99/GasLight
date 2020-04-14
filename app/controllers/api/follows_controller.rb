class Api::FollowsController < ApplicationController
    def new
        @follow = Follow.new
    end

    def create
        @follow = Follow.new(follow_params)
        @follow.user_id = current_user.id
        if @follow.save
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def index
        @follows = Follow.all
        render :index
    end

    def destroy
        @follow = Follow.find(params[:id])
        @follow.destroy
        render json: @follow
    end

    private
    def follow_params
        params.require(:follow).permit(:user_id, :campaign_id)
    end
end
