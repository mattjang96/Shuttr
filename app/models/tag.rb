class Tag < ApplicationRecord
  validates :tag_name, :photo_id, presence: true

  belongs_to :photo,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: "Photo"
end
