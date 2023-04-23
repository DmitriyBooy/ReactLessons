import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({ posts }) => {
  return (
    <div className={s.posts}>
      <h3>
        my posts
      </h3>

      <div className={s.new_post}>
        <textarea/>

        <div className={s.new_post_add_button_wrapper}>
          <button>add post</button>
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
