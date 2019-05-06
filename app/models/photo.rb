# == Schema Information
#
# Table name: photos
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :string
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
    validates :title, :owner_id, presence: true
    validate :ensure_photo

    belongs_to :user,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: "User"

    has_one_attached :image

    has_many :photo_albums,
        primary_key: :id,
        foreign_key: :photo_id,
        class_name: "PhotoAlbum"

    has_many :albums,
        through: :photo_albums,
        source: :album

    has_many :comments,
        primary_key: :id,
        foreign_key: :photo_id,
        class_name: "Comment",
        dependent: :destroy

    has_many :tags,
        primary_key: :id,
        foreign_key: :photo_id,
        class_name: "Tag",
        dependent: :destroy

    def ensure_photo
        unless self.image.attached?
        errors[:image] << "has to be attached"
        end
    end
end
