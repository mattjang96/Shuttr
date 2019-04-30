class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.string :description
      t.integer :owner_id, null: false

      t.timestamps
    end
  add_index :photos, :title
  add_index :photos, :owner_id
  end
end
