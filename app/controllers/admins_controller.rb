class AdminsController < ApplicationController

    def show
        render json: current_user, status: :ok
    end

    def update
        user = Admin.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    private

    def user_params
        params.permit(:username, :password, :linkdin, :insta, :email, :bio, :githublink, :location, :careergoals)
    end



end
