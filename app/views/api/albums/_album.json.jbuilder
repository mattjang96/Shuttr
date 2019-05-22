json.extract! album, :id, :title, :description, :photo_ids, :user_id

json.photos album.photos, partial: 'api/photos/photo', as: :photo

json.user album.user