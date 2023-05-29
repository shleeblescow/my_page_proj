class AdminsController < ApplicationController

    skip_before_action :authorized_admin, only: [:create, :index]

    def show
        render json: current_admin, status: :ok
    end
 
    def update
        admin = Admin.find(params[:id])
        admin.update!(admin_params)
        render json: admin, status: :accepted
    end

    def adminprofile
        admin = Admin.find(params[:id])
        render json:admin
    end

    def index
        render json: Admin.all
    end

    def create
        admin = Admin.create!(admin_params)
        session[:admin_id] = admin.id
        render json: admin, status: :created
    end

    private

    def admin_params
        params.permit(:username, :password, :linkdin, :insta, :email, :bio, :githublink, :location, :careergoals)
    end



end
