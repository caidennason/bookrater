class User < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.text :about_me
      t.string :location
      t.string :password_digest

      t.timestamps
    end
  end
end
