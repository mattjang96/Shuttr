class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  helper_method :current_user, :logged_in?

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def require_login
    redirect_to root_url unless logged_in?
  end

  def require_logout
    redirect_to root_url if logged_in?
  end

  def logout!
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end

end