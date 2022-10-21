import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
  return (<div className="storyReel">
    <Story
        image="https://pbs.twimg.com/media/Duvd3QRW4AA9Ojf.jpg"
        profileSrc="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&w=350&h=254"
        title="Luka Dončić"
    />
     <Story
        image="https://www.ocregister.com/wp-content/uploads/2019/04/GettyImages-1142671305-1.jpg?w=620"
        profileSrc="https://b.fssta.com/uploads/application/nba/headshots/1550.vresize.350.350.medium.90.png"
        title="Stephen Curry"
    />
     <Story
        image="https://i.pinimg.com/originals/5f/2c/62/5f2c6230d938b73b840a5c7cc4e5d807.jpg"
        profileSrc="https://b.fssta.com/uploads/application/nba/headshots/1120.png"
        title="Lebron James"
    />
     <Story
        image="http://cdn.shopify.com/s/files/1/0589/1069/products/BasketballLarryBirdv.MagicJohnson-4089350.jpg?v=1602968470"
        profileSrc="http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_329/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/b/9/b9ee9ffab2e220c756427b601a4690c5d294c963/larry-bird-career-retrospective.jpg"
        title="Larry Bird"
    />
     <Story
        image="https://fadeawayworld.com/.image/t_share/MTc5ODU5OTk5NzEwNzE3NTUx/kobe-bryant-2001-nba-finals-championship-allen-iverson.jpg"
        profileSrc="https://www.ocregister.com/wp-content/uploads/migration/kpl/kpldel-20iverson2large.jpg?w=879"
        title="Allen Iverson"
    />
    </div>
  )
}

export default StoryReel