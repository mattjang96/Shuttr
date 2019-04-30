class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :tag_name, null: false
      t.integer :photo_id, null: false

      t.timestamps
    end

    add_index :tags, :photo_id
  end
end
