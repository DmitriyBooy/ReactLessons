import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

  let postsData = [
    {id: 0, message: 'Hi, how are you', likesCount: 12},
    {id: 1, message: 'It\'s my first post', likesCount: 11}
  ]

  return (
    <div className={s.content}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Добавить пост</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post
          message={postsData[0].message}
          likeCount={postsData[0].likesCount}
        />
        <Post
          message={postsData[1].message}
          likeCount={postsData[1].likesCount}
        />
      </div>
    </div>
  )
}

export default MyPosts