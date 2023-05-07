import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = ({ posts, newPostText, onPostChange, onAddPost }) => {
  const textarea = React.createRef()

  return (
    <div className={s.posts}>
      <h3>
        my posts
      </h3>

      <div className={s.new_post}>
        <textarea
          ref={textarea}
          onChange={() => onPostChange(textarea.current.value)}
          value={newPostText}
        />

        <div className={s.new_post_add_button_wrapper}>
          <button onClick={ onAddPost }>
            add post
          </button>
        </div>
      </div>

      <div className={s.posts}>
        {
          posts.map(({ message, likesCount, id }) => {
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
