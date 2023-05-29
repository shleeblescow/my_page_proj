class SessionsController < ApplicationController
  
    skip_before_action :authorized_admin, only: [:create]
  
    def create # '/login' 
        
        admin = Admin.find_by(username:params[:username])
        
        if admin&.authenticate(params[:password])
          session[:admin_id] = admin.id
          render json: admin, status: :ok
        else 
          render json: {errors: "Invalid Password or Username"}, status: :unauthorized
        end
      end
  
    def delete
      session.delete :admin_id
      head :no_content
    end 
  
  end