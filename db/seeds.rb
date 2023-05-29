# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# Because that command is run each time you re-deploy the app, you don't necessarily need to seed your database when you intially deploy it. 
# Whenever you add the seed data, just push up the changes to GitHub and re-deploy your app.
# As long as the seed command is in your build script, your database will be seeded.

me = Admin.create(
    username: "shleebles",
    password: "toyprinter",
    linkdin: "https://www.linkedin.com/in/shelby-lee-slee",
    insta: "@shleeblesgreencow",
    email: "shleeblesgreencow@gmail.comn",
    githublink: "https://github.com/shleeblescow",
    bio: "I'm a young professional with an educational background in aerospace engineering (University of WA '21) and software development (Flatiron School '22).  I love flying, running, biking, and working with my hands.  I am currently located in Seattle but love travleing and am interested in remote or in person roles based on the West Coast, in CO, or abroad!",
    location: "Seattle, WA",
    careergoals: "Fulltime or contract work in engineering, software, desing, and or developemnt in tech and/or aerospace fields.",
)