class AddActivateToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :activate, :boolean, null: false, default: false
  end
end
