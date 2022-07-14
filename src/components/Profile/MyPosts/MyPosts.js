import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />)

  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost(newPostElement.current.value)
  }

  return (
    <div className={s.content}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea ref={ newPostElement } />
        </div>
        <div>
          <button onClick={onAddPost}>Добавить пост</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts