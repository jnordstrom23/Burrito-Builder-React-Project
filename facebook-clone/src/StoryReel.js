import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel({image,profilePic,username}) {
  return (<div className="storyReel">
    <Story
        image={image}
        profilePic= {profilePic}
        username= {username}
    />
  
    </div>
  )
}

export default StoryReel