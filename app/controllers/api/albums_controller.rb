class Api::AlbumsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def index
    @albums = Album.all
  end

  def show
    @album = Album.find(params[:id])
    if @album
      render :show
    else
      render json: @album.errors.full_messages, status: 404
    end
  end

  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    photo_ids = params[:album][:photo_ids].split(",")
    if photo_ids && !photo_ids.empty? && @album.save
      photo_ids.each do |id|
        PhotoAlbum.create(album_id: @album.id, photo_id: id.to_i)
      end
      render :show
    else
      # render json: @album.errors.full_messages, status: 422
      render json: ["Please enter a title and select photos."], status: 422
    end
  end

  def update
    @album = current_user.albums.find(params[:id])
    if @album.update(album_params)
      render :show
    else
      render json: @album.errors.full_messages, status: 404
    end
  end

  def destroy
    @album = current_user.albums.find(params[:id])
    @album.destroy
    render json: { message: 'Delete Successful'}
  end

  private

  def album_params
    params.require(:album).permit(:title, :description, photo_ids: [])
  end

end