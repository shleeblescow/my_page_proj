class AdminSerializer < ActiveModel::Serializer
  attributes :id, :username, :linkdin, :insta, :email, :githublink, :password_digest, :bio, :location, :careergoals
end
