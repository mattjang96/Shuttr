# == Schema Information
#
# Table name: photo_albums
#
#  id         :bigint(8)        not null, primary key
#  photo_id   :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PhotoAlbum < ApplicationRecord
    belongs_to :photo,
        primary_key: :id,
        foreign_key: :photo_id,
        class_name: "Photo"

    belongs_to :album,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: "Album"
        
end
