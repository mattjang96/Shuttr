class Api::CommentsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def show
    @comment = Comment.find(params[:id])
    if @comment
      render :show
    else
      render json: @comment.errors.full_messages, status: 404
    end
  end

  def index
    @comments = (
      if params[:photo_id]
        Comment.find(params[:photo_id])
      else
        Comment.all
      end
    )
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    
  end

  def destroy
    
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :photo_id)
  end

end
