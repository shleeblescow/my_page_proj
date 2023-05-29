class ApplicationController < ActionController::API
    
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    include ActionController::Cookies

    before_action :authorized_admin

    def current_admin
        admin = Admin.find_by(id: session[:admin_id])
        admin
    end

    def authorized_admin  
        return render json: { error: "Not authorized" }, status: :unauthorized unless current_admin
    end

    private

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end 

    def render_not_found(error)
        render json: {errors: {error.model => "Not Found"}}, status: :not_found
    end 

end
