import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg"
          alt='profile_header_photo'
        />
      </div>

      <div>
        ava + description
      </div>

      <div>
        new post
      </div>

      <div className={s.posts}>
        Posts
        <div className={s.item}>
          post 1
        </div>

        <div className={s.item}>
          post 2
        </div>
      </div>
    </div>
  )
}

export default Profile
