class CreateAmenities < ActiveRecord::Migration[5.1]
  def change
    create_table :amenities do |t|
      t.string :name
      t.boolean :active

      t.timestamps
    end
  end
end
