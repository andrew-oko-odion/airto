class RemoveActivateFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :activate, :boolean
  end
end
