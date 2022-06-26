import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.content}>
      my posts
      <div>
        new post
      </div>
      <Post
        message='Hi, how are you?'
        likeCount='30'
      />
      <Post
        message="It's my first post"
        likeCount='25'
      />
    </div>
  )
}

export default MyPosts