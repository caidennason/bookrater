class AddAboutAndUserIdToBooks < ActiveRecord::Migration[7.0]
  def change
    add_column :books, :about, :text
    add_column :books, :user_id, :integer
  end
end
