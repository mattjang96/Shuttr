# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
Photo.destroy_all
Album.destroy_all
PhotoAlbum.destroy_all
Comment.destroy_all
Tag.destroy_all

user = User.create!({
  fname: "demo", 
  lname: "user", 
  username: "demo", 
  email: "demouser@demo.com", 
  password: "password"
})

user1 = User.create!({
  fname: "Cynthia", 
  lname: "Ma", 
  username: "cynthiama", 
  email: "cynthia@ma.com", 
  password: "password"
})

user2 = User.create!({
  fname: "Timothy", 
  lname: "Lim", 
  username: "limothy", 
  email: "timothy@lim.com", 
  password: "password"
})

user3 = User.create!({
  fname: "Alan", 
  lname: "Kwok", 
  username: "MasterKwok", 
  email: "alan@kwok.com", 
  password: "password"
})

user4 = User.create!({
  fname: "Johnny", 
  lname: "Tu", 
  username: "TuTu", 
  email: "tu@tutu.com", 
  password: "password"
})

photo1 = Photo.new({
  title: "Apartment",
  description: "beach house",
  user: user,
})
photo1.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/apartment.jpg'), filename: 'apartment.jpg')
photo1.save!

photo2 = Photo.new({
  title: "Arches",
  description: "Cathedral",
  user: user,
})
photo2.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/arches.jpg'), filename: 'arches.jpg')
photo2.save!

photo3 = Photo.new({
  title: "Art Building",
  description: "Symmetry and organized windows",
  user: user,
})
photo3.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/art_building.jpg'), filename: 'art_building.jpg')
photo3.save!

photo4 = Photo.new({
  title: "Blueprint",
  description: "Architect working on a blueprint",
  user: user,
})
photo4.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/blueprint.jpg'), filename: 'blueprint.jpg')
photo4.save!

photo5 = Photo.new({
  title: "Boardwalk",
  description: "Black and White photography of my backyard",
  user: user,
})
photo5.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/boardwalk.jpg'), filename: 'boardwalk.jpg')
photo5.save!

photo6 = Photo.new({
  title: "Geometric lines",
  description: "The line between math and art blends",
  user: user4,
})
photo6.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/lines.jpg'), filename: 'lines.jpg')
photo6.save!

photo7 = Photo.new({
  title: "Skyscrapers",
  description: "Ground view of the giants",
  user: user4,
})
photo7.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/skyscrapers.jpg'), filename: 'skyscrapers.jpg')
photo7.save!

photo8 = Photo.new({
  title: "Fluid building",
  description: "Building with fluid design",
  user: user3,
})
photo8.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/fluid.jpg'), filename: 'fluid.jpg')
photo8.save!

photo9 = Photo.new({
  title: "Mall",
  description: "Escalators side view",
  user: user1,
})
photo9.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/mall.jpg'), filename: 'mall.jpg')
photo9.save!

photo10 = Photo.new({
  title: "Reflection",
  description: "Buildings reflection",
  user: user2,
})
photo10.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/reflect.jpg'), filename: 'reflect.jpg')
photo10.save!

photo11 = Photo.new({
  title: "City",
  description: "The world sure is large",
  user: user3,
})
photo11.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/city.jpg'), filename: 'city.jpg')
photo11.save!

photo12 = Photo.new({
  title: "Living Room",
  description: "Interior design ideas",
  user: user4,
})
photo12.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/interior.jpg'), filename: 'interior.jpg')
photo12.save!

photo13 = Photo.new({
  title: "Colorful buildings",
  description: "Bright, colorful buildings I came across",
  user: user3,
})
photo13.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/colorful.jpg'), filename: 'colorful.jpg')
photo13.save!

# photo14 = Photo.new({
#   title: "Leopard",
#   description: "It looks cold",
#   user: user,
# })
# photo14.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/leopard.jpg'), filename: 'leopard.jpg')
# photo14.save!

# photo15 = Photo.new({
#   title: "Lightning Strike",
#   description: "Hope no one got hit",
#   user: user2,
# })
# photo15.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/lightning.jpg'), filename: 'lightning.jpg')
# photo15.save!

# photo16 = Photo.new({
#   title: "Mountains",
#   description: "Calm lake near mountain",
#   user: user1,
# })
# photo16.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/mountains.jpg'), filename: 'mountains.jpg')
# photo16.save!

# photo17 = Photo.new({
#   title: "Starry Night",
#   description: "Camping with family",
#   user: user3,
# })
# photo17.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/night-sky.jpg'), filename: 'night-sky.jpg')
# photo17.save!

# photo18 = Photo.new({
#   title: "Osprey",
#   description: "Eying that fish",
#   user: user,
# })
# photo18.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/osprey.jpg'), filename: 'osprey.jpg')
# photo18.save!

# photo19 = Photo.new({
#   title: "Parrot",
#   description: "I wonder if it can talk",
#   user: user,
# })
# photo19.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/parrot.jpg'), filename: 'parrot.jpg')
# photo19.save!

# photo20 = Photo.new({
#   title: "Pikachu!",
#   description: "Pika Pika",
#   user: user1,
# })
# photo20.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/pikachu.jpg'), filename: 'pikachu.jpg')
# photo20.save!

# photo21 = Photo.new({
#   title: "Red Panda",
#   description: "It's so fluffy",
#   user: user2,
# })
# photo21.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/red_panda.jpg'), filename: 'red_panda.jpg')
# photo21.save!

# photo22 = Photo.new({
#   title: "Reflection",
#   description: "The lake is too calm",
#   user: user3,
# })
# photo22.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/reflection.jpg'), filename: 'reflection.jpg')
# photo22.save!

# photo23 = Photo.new({
#   title: "Roses",
#   description: "A gift from someone special",
#   user: user4,
# })
# photo23.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/roses.jpg'), filename: 'roses.jpg')
# photo23.save!

# photo24 = Photo.new({
#   title: "Water Droplet",
#   description: "The tree looks so clear",
#   user: user,
# })
# photo24.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/water-droplet.jpg'), filename: 'water-droplet.jpg')
# photo24.save!

# photo25 = Photo.new({
#   title: "White Trees",
#   description: "Snow covered everything",
#   user: user,
# })
# photo25.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/white-trees.jpg'), filename: 'white-trees.jpg')
# photo25.save!