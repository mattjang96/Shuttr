class Api::SessionsController < ApplicationController
  before_action :require_login, only: :destroy
  before_action :require_logout, only: :create

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render "/api/users/show"
    else
      render json: ["Invalid Credentials. Please try again."], status: 401
    end
  end

  def destroy
    logout!
    render json: { message: 'Logout Successful' }
  end

end
