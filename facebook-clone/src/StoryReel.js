import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel({image,profilePic,username,checked}) {
  return (<div className="storyReel">
    <Story
        image={image}
        profilePic= {profilePic}
        username= {username}
        checked= {checked}
    />
  
    </div>
  )
}

export default StoryReel