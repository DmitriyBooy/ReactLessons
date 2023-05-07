import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {
  addPostCreator,
  updateNewPostTextCreator,
}from '../../../redux/ProfileReducer'
const MyPosts = ({ profileState, dispatch }) => {
  const textarea = React.createRef()

  const addNewPost = () => dispatch(addPostCreator())

  const onPostChange = () => dispatch(updateNewPostTextCreator(textarea.current.value))

  return (
    <div className={s.posts}>
      <h3>
        my posts
      </h3>

      <div className={s.new_post}>
        <textarea
          ref={textarea}
          onChange={onPostChange}
          value={profileState.newPostText}
        />

        <div className={s.new_post_add_button_wrapper}>
          <button onClick={ addNewPost }>
            add post
          </button>
        </div>
      </div>

      <div className={s.posts}>
        {
          profileState.posts.map(({ message, likesCount, id }) => {
            return (
              <Post
                message={message}
                likesCount={likesCount}
                key={id}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default MyPosts
