class Api::PhotosController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def index
    @photos = Photo.all
  end

  def show
    @photo = Photo.find(params[:id])
    if @photo
      render :show
    else
      render json: @photo.errors.full_messages, status: 404
    end
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.owner_id = current_user.id
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = current_user.photos.find(params[:id])
    if @photo.update(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 404
    end
  end

  def destroy
    @photo = current_user.photos.find(params[:id])
    @photo.destroy
    render json: { message: 'Delete Successful' }
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :image)
  end

end