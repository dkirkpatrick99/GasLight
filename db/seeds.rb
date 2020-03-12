# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Campaign.delete_all
User.delete_all

u1 = User.create!(
    username: "alex",
    email: "alex@gmail.com",
    company_name: "MAD Gaze",
    password: "abcdef1"
)
u2 = User.create!(
    username: "gracie",
    email: "gracie@gmail.com",
    company_name: "PrinCube",
    password: "abcdef2"

)
u3 = User.create!(
    username: "jasmine",
    email: "jasmine@gmail.com",
    company_name: "Graff Golf",
    password: "abcdef3"
)
u4 = User.create!(
    username: "johnny",
    email: "johnny@gmail.com",
    company_name: "Flash",
    password: "abcdef4"
)
u5 = User.create!(
    username: "alberto",
    email: "alberto@gmail.com",
    company_name: 'Pecaminosa',
    password: "abcdef5"
)
u6 =User.create!(
    username: "lyn",
    email: "lyn@gmail.com",
    company_name: "V-Tex",
    password: "abcdef6"
)



camp = Hash.new()
camp[1] = Campaign.create!(
    title: "MAD Gaze: Smartest watch with gesture controls",
    location: "Hong Kong, Hong Kong",
    short_description: "Create Your Own Shortcuts, Access a Futuristic Life Using Wrist, Hand & Finger Gestures",
    long_description: "Smartwatches and mobile phones have powerful features that we rely on throughout our day but they can be inconvenient to use while on the go. 
    The MAD Gaze Watch lets users conveniently control their digital lives with simple hand, wrist, and finger gestures to trigger apps, photos, music, and many other smart features.
    MAD Gaze Watch is powered by advanced hand gesture controls that can be fully customized for any watch function. For instance, tapping a surface, snapping different fingers, turning your wrist, or simply tapping the back of your hand can trigger different actions such as taking pictures, answering and declining phone calls, playing music, controlling volume, setting timers, sharing locations. 
    MAD Gaze Watch also works as an accurate gesture control device for playing games in AR and VR using advanced motion sensing. Using your arm and wrist makes for more natural gameplay and lets you level up fast!",
    goal_amount: 10000,
    end_date: 45,
    goal_status: false,
    owner_id: u1.id,
    current_sum: 96592
)
camp[2] = Campaign.create!(
    title: "PrinCube: The World's Smallest Mobile Color Printer",
    location: "New York, United States",
    short_description: "Palm-size and lightweight, enables color printing anywhere & anytime and on any surface by 3 steps.",
    long_description: "PrinCube is the ultimate handheld, portable printer. It’s ultra-lightweight, fits in the palm of your hand and lets you create fast, vivid, color printing anywhere. 
    It works over Wi-Fi with your phone to easily upload any text, image, or design and instantly print onto virtually any object or surface at the touch of a button. 
    
    Printing has never been more mobile and more convenient. This incredible lightweight, the color printer is portable enough to take the power of inkjet printing on-the-go anywhere you want. 
    It's color inkjet personalizes ordinary objects, makes messages that stand out and is the perfect tool for arts and crafts. It’s perfect for business travel, events, art, and fun.
    
    The biggest limitation of traditional printers is that they can only print on paper. Until now, expensive laser engravers and screen-printing were required for putting logos and lettering on everyday objects. 
    Now, with the PrinCube handheld portable printer, virtually any object can be printed upon. It makes precise prints on virtually any materials including paper, metal, textiles, plastics, wood, leather and other building and artistic materials.",
    goal_amount: 500000,
    end_date: 90,
    goal_status: false,
    owner_id: u2.id,
    current_sum: 945032
)
camp[3] = Campaign.create!(
    title: "Graff Golf: The World’s First Smart Golf Ball",
    location: "Baltimore, United States",
    short_description: "A smart golf ball + analytics platform that tracks your ball and analyzes your unique shot data.",
    long_description: "Our smart golf ball allows you to play golf how you always have and receive actionable insights into your game. No more endless range sessions with no strategy except to swing until your arms give out.
    With the Graff smart golf ball, the more shots you hit, the more comprehensive your data becomes. And when you subscribe to the app, the data is automatically analyzed and used to create a customized Improvement Plan catered to your game.
    The app automatically learns your game as you play, and provides you with a strategic way forward to becoming a better golfer.",
    goal_amount: 20000,
    end_date: 7,
    goal_status: false,
    owner_id: u3.id,
    current_sum: 5731
)
camp[4] = Campaign.create!(
    title: "Flash: World's Most Powerful 170W USB-C Powerbank",
    location: "Seattle, United States",
    short_description: "World's Fastest Charging Powerbank with 100W PD & Wireless Powered by Tesla™ graphene batteries",
    long_description: "Flash has not 1 only USB-C Power Delivery 3.0 port but also 2 USB-A ports and even a wireless charging pad. 
    Flash delivers the most powerful USB-C 100W Power Delivery 3.0 charge in a single battery pack while most of the competition struggles to even reach 60W. 
    We've also thrown in a powerful 18W USB-A Qualcomm Quick Charge 3.0 port and a specially designed USB-A port that's compatible with Huawei, Oppo, OnePlus and Vivo's proprietary fast charge technology. 
    To top this of Flash features a powerful 10W wireless fast charge pad and it even supports 2.5W Apple Watch charge meaning 1 powerbank can charge all your devices including all smart phones with wireless and even Apple Airpods/Airpods Pro.",
    goal_amount: 55000,
    end_date: 23,
    goal_status: false,
    owner_id: u4.id,
    current_sum: 33775
)
camp[5] = Campaign.create!(
    title: "Pecaminosa: A Pixel Noir Game",
    location: "São Miguel, Azores, Portugal",
    short_description: "As a former detective explore Pecaminosa, a failed Las Vegas blended with a gritty Chicago.",
    long_description: "Pecaminosa is a Police Action RPG, based on a Film Noir concept with a Pixel Art aesthetic. As John Souza – a former detective succumbed to the pleasures of alcohol and flesh – you will explore the city and its unique environments, as well as fight ordinary thieves, chase smart criminals, and even some forces of… the occult. 
    Pecaminosa is a dark gambling city that smells of death, sex, and gunpowder. And you know what? Once you are there, you’ll get the opportunity to experience this fictional open-ended city, all the while living through a humorous, provocative and rich story, full of twists, turns and…a lot of liquor. 
    Aside from the rewards that you receive from your chosen tier, you can also choose to complement it with add-ons as follows (prices don't include international shipping).",
    goal_amount: 11000,
    end_date: 105,
    goal_status: false,
    owner_id: u5.id,
    current_sum: 2900
)
camp[6] = Campaign.create!(
    title: "V-Tex: 12 Feature Nanotech Shoe for all Seasons",
    location: "Frankfurt, Germany",
    short_description: "A mix of a slipper & a boot in one 12 feature all-weather waterproof breathable nanotech knit shoe",
    long_description: "With the capabilities of rain boots and comfort of your most relaxing sandals, the V-tex are the best all-season shoe you’ll never want to take off. Use them as aquatic shoes or take them to the snow. V-Tex 4 layer knit technology will keep your feet comfortable and protected no matter where you go, any time of the year! 
    Puddles come in all shapes and sizes. Don't let water sneak into your shoe nor stain your shoes. 
    Do you remember puddle hopping in the rain - only to wear those cold, wet sneakers all day long in grade school? 
    Now you can relive those childhood memories and get to your destination with your feet as dry as when you left your home. Our fabric is designed to amazingly block water, while letting air still pass through, keeping you extra dry and comfortable.",
    goal_amount: 300000,
    end_date: 2,
    goal_status: false,
    owner_id: u6.id,
    current_sum: 205100
)
camp[7] = Campaign.create!(
    title: "Drop x THX Panda Headphones",
    location: "San Francisco, United States",
    short_description: "The World’s highest fidelity wireless headphones.",
    long_description: "The world’s first wireless Hi-Fi headphone, Panda features never-before-seen tech in a never-leave-at-home design. 
    Thanks to its planar-ribbon drivers (powered by THX AAA™ amplifier technology) with audio delivered from your phone via Sony’s LDAC Bluetooth, Panda puts you closer to your music than ever before—wherever life takes you. 
    A collaboration between Drop and THX, Panda lets you discover new details in your favorite songs. Equipped with a THX AAA™ amplifier, planar-ribbon drivers, and a high-bandwidth Bluetooth audio codec (a proprietary never-before-seen combination known as the 3P Signal Path), Panda is the world’s first headphone to deliver an audiophile listening experience—wirelessly. 
    It sets a new standard when listening to music, watching movies, or playing games. ",
    goal_amount: 70000,
    end_date: 39,
    goal_status: false,
    owner_id: u2.id,
    current_sum: 200550
)
camp[8] = Campaign.create!(
    title: "CIGA Design Z-Series Mechanical Titanium Watch",
    location: "Alhambra, United States",
    short_description: "Designed to highlight real men’s love of complexity with outstanding design and superb performance",
    long_description: "Man has always been fascinated by how things work, especially regarding the beauty of complex engines and complicated mechanisms. 
    Rather than conceal the inner workings behind a characterless exterior, we believe it’s time to bring things out into the open. 
    To see the precise and beautiful mechanics of a watch at work. 
    A sophisticated transparent fully automatic timepiece made from Titanium and Sapphire Crystal that affords its wearer and those around him a chance to marvel at its inner workings and inherent strength.",
    goal_amount: 100000,
    end_date: 12,
    goal_status: false,
    owner_id: u4.id,
    current_sum: 1455700
)
camp[9] = Campaign.create!(
    title: "Forsaken: A Short Film",
    location: "York, United Kingdom",
    short_description: "Two sides. One Memory.",
    long_description: "We are a team of upcoming filmmakers from Yorkshire with a burning desire to create our newest short film: Forsaken, a thriller-mystery that centers around three characters: Jack, Harry and Steve, a group of friends who decide to go on a camping trip together for the weekend, each of them has their personal grievances with each other and it all comes to light when the lies and secrets are unravelled on one night. 
    In the present day we see Jack and Harry recount their memory of that fateful night. 
    For this short-film we need your help to raise the funds we need for transport and catering for our actors and crew, as well as any props and costumes we need on set. 
    The funds will also benefit the overall quality of the post-production, allowing us access to a library of high-quality music and sound effects. Your contribution will ultimately increase the quality of Forsaken and help us in achieving our vision for the film. 
    From our experience of working on previous projects, we aim to make Forsaken the most visually gratifying, greatest sounding and impressive short film we have released to date. Our team is comprised from eight enthusiastic and passionate crew members with a drive to tell stories. 
    We feel that Forsaken is a different take on this genre of film, and we hope that you can help us bring this story to life.",
    goal_amount: 5000,
    end_date: 1,
    goal_status: false,
    owner_id: u5.id,
    current_sum: 2700
)

camp.keys.each do |num|
    file = open("https://moneywise-dev.s3-us-west-1.amazonaws.com/#{num}.jpg")
    camp[num].photo.attach(io: file, filename: "#{num}.jpg")
end
# camp10 = Campaign.create!(
#     title: "",
#     location: "",
#     short_description: "",
#     long_description: "",
#     goal_amount: ,
#     end_date: 5,
#     owner_id: 4
# )
# camp11 = Campaign.create!(
#     title: "",
#     location: "",
#     short_description: "",
#     long_description: "",
#     goal_amount: ,
#     end_date: 26,
#     owner_id: 1
# )