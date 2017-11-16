class CreateSpaces < ActiveRecord::Migration[5.1]
  def change
    create_table :spaces do |t|
      t.string :name
      t.text :description
      t.string :location
      t.integer :guest_capacity
      t.decimal :fee
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
