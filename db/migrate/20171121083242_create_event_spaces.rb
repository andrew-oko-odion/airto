class CreateEventSpaces < ActiveRecord::Migration[5.1]
  def change
    create_table :event_spaces do |t|
      t.string :location
      t.decimal :rate
      t.text :description
      t.references :amenity, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
