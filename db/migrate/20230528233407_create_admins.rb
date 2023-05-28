class CreateAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :admins do |t|
      t.string :username
      t.string :linkdin
      t.string :insta
      t.string :email
      t.string :githublink
      t.string :password_digest
      t.text :bio
      t.string :location
      t.string :careergoals

      t.timestamps
    end
  end
end
