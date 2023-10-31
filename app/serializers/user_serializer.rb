class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :about_me, :location, :created_at, :updated_at
  has_many :books
end
