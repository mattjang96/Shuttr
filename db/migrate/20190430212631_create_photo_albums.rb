class CreatePhotoAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :photo_albums do |t|
      t.integer :photo_id, null: false
      t.integer :album_id, null: false

      t.timestamps
    end

    add_index :photo_albums, :photo_id
    add_index :photo_albums, :album_id
  end
end
