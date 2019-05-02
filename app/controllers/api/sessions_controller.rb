class Api::SessionsController < ApplicationController
    before_action :require_login, only: :destroy
    before_action :require_logout, only: :create

    def create
        debugger
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login!(@user)
            # need to specfify route so it knows where to get the user data from
            render "/api/users/show"
        else
            render json: ["Username already exists. Please try again."], status: 401
        end
    end

    def destroy
        logout!
        render json: { message: 'Logout Successful' }
    end
    
end
