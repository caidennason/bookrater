class User < ApplicationRecord
    validates :name, presence: true
    validates :location, presence: true 
    validates :about_me, presence: true 
    has_secure_password
end