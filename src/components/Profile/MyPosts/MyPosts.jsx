import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={s.posts_wrapper}>
      my posts
      <div>
        <textarea/>
        <button>add post</button>
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
