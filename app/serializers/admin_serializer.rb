class AdminSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :username, :linkdin, :insta, :email, :githublink, :bio, :location, :careergoals
end
