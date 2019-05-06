# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

# User.destroy_all
# Photo.destroy_all
# Album.destroy_all
# PhotoAlbum.destroy_all
# Comment.destroy_all
# Tag.destroy_all

# user = User.create!({
#   fname: "demo", 
#   lname: "user", 
#   username: "demo", 
#   email: "demouser@demo.com", 
#   password: "password"
# })

# user1 = User.create!({
#   fname: "Cynthia", 
#   lname: "Ma", 
#   username: "cynthiama", 
#   email: "cynthia@ma.com", 
#   password: "password"
# })

# user2 = User.create!({
#   fname: "Timothy", 
#   lname: "Lin", 
#   username: "limothy", 
#   email: "timothy@lim.com", 
#   password: "password"
# })

# user3 = User.create!({
#   fname: "Alan", 
#   lname: "Kwok", 
#   username: "Kwokster", 
#   email: "alan@kwok.com", 
#   password: "password"
# })

# user4 = User.create!({
#   fname: "Johnny", 
#   lname: "Tu", 
#   username: "TuTu", 
#   email: "tu@tutu.com", 
#   password: "password"
# })

# photo1 = Photo.new({
#   title: "dullahan",
#   description: "headless horseman",
#   user: user,
# })
# photo1.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/dullahan.jpg'), filename: 'dullahan.jpg')
# photo1.save!

# photo2 = Photo.new({
#   title: "Cherry Blossoms",
#   description: "Trip to Japan",
#   user: user,
# })
# photo2.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/cherry_blossoms.jpg'), filename: 'cherry_blossoms.jpg')
# photo2.save!

# photo3 = Photo.new({
#   title: "Eagle",
#   description: "Eagle looking for prey",
#   user: user,
# })
# photo3.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/eagle.jpg'), filename: 'eagle.jpg')
# photo3.save!

# photo4 = Photo.new({
#   title: "Orange moon",
#   description: "Very pretty moon",
#   user: user,
# })
# photo4.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/orange_moon.jpg'), filename: 'orange_moon.jpg')
# photo4.save!

# photo5 = Photo.new({
#   title: "Waterfall into pool",
#   description: "The water has a nice color",
#   user: user,
# })
# photo5.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/pool.jpg'), filename: 'pool.jpg')
# photo5.save!

# photo6 = Photo.new({
#   title: "Blue Butterflies",
#   description: "A lot of blue butterflies",
#   user: user4,
# })
# photo6.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/butterflies.jpg'), filename: 'butterflies.jpg')
# photo6.save!

# photo7 = Photo.new({
#   title: "Lone Butterfly",
#   description: "A butterfly on the ground",
#   user: user4,
# })
# photo7.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/butterfly.jpg'), filename: 'butterfly.jpg')
# photo7.save!

# photo8 = Photo.new({
#   title: "Center of the world",
#   description: "Perfectly located sun",
#   user: user3,
# })
# photo8.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/dawn-dusk.jpg'), filename: 'dawn-dusk.jpg')
# photo8.save!

# photo9 = Photo.new({
#   title: "Elephant",
#   description: "It's looking at us",
#   user: user1,
# })
# photo9.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/elephant.jpg'), filename: 'elephant.jpg')
# photo9.save!

# photo10 = Photo.new({
#   title: "Goldfish",
#   description: "Chubby Fishy",
#   user: user2,
# })
# photo10.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/goldfish.jpg'), filename: 'goldfish.jpg')
# photo10.save!

# photo11 = Photo.new({
#   title: "Hiking Trip",
#   description: "The world sure is large",
#   user: user3,
# })
# photo11.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/hiking.jpg'), filename: 'hiking.jpg')
# photo11.save!

# photo12 = Photo.new({
#   title: "Two Koi",
#   description: "Swimming together",
#   user: user4,
# })
# photo12.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/koi.jpg'), filename: 'koi.jpg')
# photo12.save!

# photo13 = Photo.new({
#   title: "Red Sky Calm Lake",
#   description: "Thinking about my choices",
#   user: user3,
# })
# photo13.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/lake.jpg'), filename: 'lake.jpg')
# photo13.save!

# photo14 = Photo.new({
#   title: "Leopard",
#   description: "It looks cold",
#   user: user,
# })
# photo14.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/leopard.jpg'), filename: 'leopard.jpg')
# photo14.save!

# photo15 = Photo.new({
#   title: "Lightning Strike",
#   description: "Hope no one got hit",
#   user: user2,
# })
# photo15.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/lightning.jpg'), filename: 'lightning.jpg')
# photo15.save!

# photo16 = Photo.new({
#   title: "Mountains",
#   description: "Calm lake near mountain",
#   user: user1,
# })
# photo16.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/mountains.jpg'), filename: 'mountains.jpg')
# photo16.save!

# photo17 = Photo.new({
#   title: "Starry Night",
#   description: "Camping with family",
#   user: user3,
# })
# photo17.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/night-sky.jpg'), filename: 'night-sky.jpg')
# photo17.save!

# photo18 = Photo.new({
#   title: "Osprey",
#   description: "Eying that fish",
#   user: user,
# })
# photo18.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/osprey.jpg'), filename: 'osprey.jpg')
# photo18.save!

# photo19 = Photo.new({
#   title: "Parrot",
#   description: "I wonder if it can talk",
#   user: user,
# })
# photo19.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/parrot.jpg'), filename: 'parrot.jpg')
# photo19.save!

# photo20 = Photo.new({
#   title: "Pikachu!",
#   description: "Pika Pika",
#   user: user1,
# })
# photo20.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/pikachu.jpg'), filename: 'pikachu.jpg')
# photo20.save!

# photo21 = Photo.new({
#   title: "Red Panda",
#   description: "It's so fluffy",
#   user: user2,
# })
# photo21.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/red_panda.jpg'), filename: 'red_panda.jpg')
# photo21.save!

# photo22 = Photo.new({
#   title: "Reflection",
#   description: "The lake is too calm",
#   user: user3,
# })
# photo22.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/reflection.jpg'), filename: 'reflection.jpg')
# photo22.save!

# photo23 = Photo.new({
#   title: "Roses",
#   description: "A gift from someone special",
#   user: user4,
# })
# photo23.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/roses.jpg'), filename: 'roses.jpg')
# photo23.save!

# photo24 = Photo.new({
#   title: "Water Droplet",
#   description: "The tree looks so clear",
#   user: user,
# })
# photo24.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/water-droplet.jpg'), filename: 'water-droplet.jpg')
# photo24.save!

# photo25 = Photo.new({
#   title: "White Trees",
#   description: "Snow covered everything",
#   user: user,
# })
# photo25.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/white-trees.jpg'), filename: 'white-trees.jpg')
# photo25.save!