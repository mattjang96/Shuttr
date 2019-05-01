class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = selected_user
    end

    def index
        @users = User.all
    end

    private

    def selected_user
        User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:fname, :lname, :username, :email, :password)
    end

end
