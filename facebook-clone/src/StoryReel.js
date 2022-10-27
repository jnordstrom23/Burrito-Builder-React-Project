import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
  return (<div className="storyReel">
    <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ken_Griffey%2C_Jr._June_2009.jpg/800px-Ken_Griffey%2C_Jr._June_2009.jpg"
        profileSrc="https://www.sportscasting.com/wp-content/uploads/2016/07/Ken-Griffey-Jr-Seattle-Mariners.jpg"
        title="Ken Griffey Jr"
    />
     <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMWEnw80JzjQIh67ifVEHizRAjOT1Nehtzw&usqp=CAU"
        profileSrc="data:image/jpeg;base64,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"
        title="Shawn Kemp"
    />
     <Story
        image="https://denverfan.com/wp-content/uploads/2022/03/GettyImages-487518993-1-scaled-e1646782705203.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCojGe-t-x-H5ryP3gdmKzIALrWaolP-7RkwnZwHbJVg51d3fm_yfGevg9E7WsLVpmrA&usqp=CAU"
        title="Russell Wilson"
    />
     <Story
        image="https://media.gettyimages.com/photos/sue-bird-of-the-seattle-storm-poses-for-a-portrait-with-the-wnba-picture-id1228933261?s=612x612"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRH7hKwXm6Jq-iz6eStXCO4vOM1le7lVt6L2kAXQfMw&s"
        title="Sue Bird"
    />
     <Story
        image="https://www.thestar.com/content/dam/thestar/sports/leafs/2022/03/08/jared-mccann-signs-25-million-extension-with-kraken-fondly-remembers-his-three-days-with-the-leafs/jared_mccann.jpg"
        profileSrc="https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3114777.png"
        title="Jared McCann"
    />
    </div>
  )
}

export default StoryReel