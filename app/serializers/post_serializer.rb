class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :category
end
