import React from 'react'
import "./Story.css"
import {Avatar} from "@mui/material"

function Story({image, profilePic, username, checked}) {

if (checked === true) {

  return(
  <div className="story__container">
    <div style = {{backgroundImage: "url(" + image + ")"}} className= "story">
      <Avatar className="story__avatar"src={profilePic} />
        <h4>{username}</h4>

  </div>
  </div>);
}}

export default Story