import s from './Post.module.css'

const Post = ({message, likeCount}) => {
  return (
    <div className={s.item}>
      <img
        src='https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg'
        alt='post_img'
      />

      <span>
        {message}
      </span>

      <div>
        <span>
          like
        </span>

        <span>
          {likeCount}
        </span>
      </div>
    </div>
  )
}

export default Post
