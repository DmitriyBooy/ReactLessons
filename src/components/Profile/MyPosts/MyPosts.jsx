import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  const postsData = [
    {
      id: 1,
      message: 'Пиривет пиривет',
      likesCount: 2,
    },
    {
      id: 2,
      message: 'Ыть тыгыдым',
      likesCount: 4,
    },
  ]

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
          postsData.map(({ message, likesCount, id }) => {
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
