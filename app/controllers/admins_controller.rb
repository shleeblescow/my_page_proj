class AdminsController < ApplicationController

    skip_before_action :authorized_user, only: [:index]

    def show
        render json: current_user, status: :ok
    end

    def update
        user = Admin.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    def index
        render json: Admin.all
    end

    private

    def user_params
        params.permit(:username, :password, :linkdin, :insta, :email, :bio, :githublink, :location, :careergoals)
    end



end
