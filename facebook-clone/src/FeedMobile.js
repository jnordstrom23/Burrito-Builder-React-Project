import React, { useState, useEffect } from 'react';
import "./FeedMobile.css";
import StoryReel from "./StoryReel"
import MessageSender from './MessageSender';
import Post from './Post';
import db from "./firebase";
import Story from './Story';

function FeedMobile() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    db.collection('posts').orderBy("timestamp", "desc").onSnapshot((snapshot)=>
      setPosts(snapshot.docs.map((doc)=>({
        id: doc.id,
        data : doc.data()
      })))
    )
  }, [])

  console.log(posts)

  return (
<div className = "mobilewrapper">
    <div className="feedmobile">
      <div className="storyreel2">
      {
    posts.map((post)=>(
       <StoryReel
         key= {post.data.id}
         profilePic ={post.data.profilePic}
         image ={post.data.image}
         message={post.data.message}
         username={post.data.username}
         checked={post.data.checked}
           />
           ))
         }
             </div>

      <MessageSender />

       {
        posts.map((post)=>(
          <Post 
            key= {post.data.id}
            profilePic ={post.data.profilePic}
            image ={post.data.image}
            message={post.data.message}
            username={post.data.username}
            timestamp={post.data.timestamp}
          />
        ))
       }
    </div>
    </div>
  )
}

export default FeedMobile