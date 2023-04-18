import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
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
        <Post
          message='Пиривет пиривет'
          likeCount='2'
        />
        <Post
          message='Ыть тыгыдым'
          likeCount='4'
        />
      </div>
    </div>
  )
}

export default MyPosts
