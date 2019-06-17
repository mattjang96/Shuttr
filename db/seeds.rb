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
  user: user1,
})
photo1.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/apartment.jpg'), filename: 'apartment.jpg')
photo1.save!

photo2 = Photo.new({
  title: "Arches",
  description: "Cathedral",
  user: user1,
})
photo2.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/arches.jpg'), filename: 'arches.jpg')
photo2.save!

photo3 = Photo.new({
  title: "Art Building",
  description: "Symmetry and organized windows",
  user: user1,
})
photo3.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/art_building.jpg'), filename: 'art_building.jpg')
photo3.save!

photo4 = Photo.new({
  title: "Blueprint",
  description: "Architect working on a blueprint",
  user: user1,
})
photo4.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/blueprint.jpg'), filename: 'blueprint.jpg')
photo4.save!

photo5 = Photo.new({
  title: "Boardwalk",
  description: "Black and White photography of my backyard",
  user: user1,
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

photo14 = Photo.new({
  title: "Aerial View",
  description: "Bird's eye view of the city",
  user: user4,
})
photo14.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/aerial.jpg'), filename: 'aerial.jpg')
photo14.save!

photo15 = Photo.new({
  title: "Airplane and the City",
  description: "Conveniently placed airplane in the middle of the city",
  user: user2,
})
photo15.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/airplane.jpg'), filename: 'airplane.jpg')
photo15.save!

photo16 = Photo.new({
  title: "Manhattan Bridge",
  description: "Obligatory and generic tourist pic",
  user: user1,
})
photo16.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/bridge.jpg'), filename: 'bridge.jpg')
photo16.save!

photo17 = Photo.new({
  title: "Italy",
  description: "Boat ride in Italy",
  user: user3,
})
photo17.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/italy.jpg'), filename: 'italy.jpg')
photo17.save!

photo18 = Photo.new({
  title: "Sunshine",
  description: "Morning sunshine through the window",
  user: user4,
})
photo18.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/sunshine.jpg'), filename: 'sunshine.jpg')
photo18.save!

photo19 = Photo.new({
  title: "Wooden Room",
  description: "Perfect lighting in a wooden room",
  user: user2,
})
photo19.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/wood.jpg'), filename: 'wood.jpg')
photo19.save!

photo20 = Photo.new({
  title: "Beach",
  description: "Perfect weather for a nice swim!",
  user: user1,
})
photo20.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/beach.jpg'), filename: 'beach.jpg')
photo20.save!

photo21 = Photo.new({
  title: "Bird",
  description: "It's so fluffy",
  user: user2,
})
photo21.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/bird.jpg'), filename: 'bird.jpg')
photo21.save!

photo22 = Photo.new({
  title: "Dining Table",
  description: "Caught this photo on a beautiful afternoon",
  user: user3,
})
photo22.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/dining.jpg'), filename: 'dining.jpg')
photo22.save!

photo23 = Photo.new({
  title: "Roses",
  description: "A gift for someone special",
  user: user4,
})
photo23.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/flower.jpg'), filename: 'flower.jpg')
photo23.save!

photo24 = Photo.new({
  title: "Forest",
  description: "Great view of the forest",
  user: user3,
})
photo24.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/forest.jpg'), filename: 'forest.jpg')
photo24.save!

photo25 = Photo.new({
  title: "Lake",
  description: "The lake on a chilly day",
  user: user3,
})
photo25.image.attach(io: open('https://s3-us-west-1.amazonaws.com/shuttr-dev-seeds/lake.jpg'), filename: 'lake.jpg')
photo25.save!

photo26 = Photo.new({
  title: "Seed",
  description: "Week 2 of my new seed",
  user: user1,
})
photo26.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/seed.jpg'), filename: 'seed.jpg')
photo26.save!

photo27 = Photo.new({
  title: "Sky",
  description: "During my night run",
  user: user2,
})
photo27.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/sky.jpg'), filename: 'sky.jpg')
photo27.save!


photo28 = Photo.new({
  title: "Beach",
  description: "Nice day at the beach!",
  user: user3,
})
photo28.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/cloud.jpg'), filename: 'cloud.jpg')
photo28.save!

photo29 = Photo.new({
  title: "Squirrel",
  description: "Saw this kind squirrel today near school",
  user: user4,
})
photo29.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/squirrel.jpg'), filename: 'squirrel.jpg')
photo29.save!

photo30 = Photo.new({
  title: "Camera",
  description: "My new camera",
  user: user1,
})
photo30.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/camera.jpg'), filename: 'camera.jpg')
photo30.save!

photo31 = Photo.new({
  title: "Wave",
  description: "Caught a wave in action.",
  user: user2,
})
photo31.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/wave.jpg'), filename: 'wave.jpg')
photo31.save!

photo31 = Photo.new({
  title: "Wall",
  description: "Graffiti on a red wall",
  user: user3,
})
photo31.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/wall.jpg'), filename: 'wall.jpg')
photo31.save!

photo32 = Photo.new({
  title: "Desert",
  description: "Desert trip! Will come again soon.",
  user: user4,
})
photo32.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/desert.jpg'), filename: 'desert.jpg')
photo32.save!

photo33 = Photo.new({
  title: "City in the Night",
  description: "The view from my new apartment",
  user: user1,
})
photo33.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/nightcity.jpg'), filename: 'nightcity.jpg')
photo33.save!

photo34 = Photo.new({
  title: "Camping",
  description: "It was a great camping trip.",
  user: user2,
})
photo34.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/camper.jpg'), filename: 'camper.jpg')
photo34.save!

photo35 = Photo.new({
  title: "Tent",
  description: "The view from my tent at Yosemite",
  user: user4,
})
photo35.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/tent.jpg'), filename: 'tent.jpg')
photo35.save!

photo36 = Photo.new({
  title: "Omega Seamaster 300m",
  description: "My grail watch",
  user: user4,
})
photo36.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/seamaster.jpg'), filename: 'seamaster.jpg')
photo36.save!

photo37 = Photo.new({
  title: "Greece".
  description: "Boatside view of my stay",
  user: user1,
})
photo37.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/greece.jpg'), filename: 'greece.jpg')
photo37.save!

phot038 = Photo.new({
  title: "Greece from Above",
  description: "Drone shot of the beach",
  user: user2,
})
photo38.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/drone.jpg'), filename: 'drone.jpg')
photo38.save!

photo39 = Photo.new({
  title: "Greece from the boat",
  description: "Greece buildings during my boat ride",
  user: user3,
})
photo39.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/greeceboat.jpg'), filename: 'greeceboat.jpg')
photo39.save!

photo40 = Photo.new({
  title: "Greece Street",
  description: "Street Photography at Greece",
  user: user4,
})
photo40.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/greecestreet.jpg'), filename: 'greecestreet.jpg')
photo40.save!

photo41 = Photo.new({
  title: "Greece Corner",
  description: "Alleyway at Greece",
  user: user4,
})
photo41.image.attach(io: open('https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/greecealley.jpg'), filename: 'greecealley.jpg')
photo41.save!