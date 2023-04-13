import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

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

      <MyPosts />
    </div>
  )
}

export default Profile
