import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.profile_img}
          src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg"
          alt='profile_header_photo'
        />
      </div>

      <div className={s.description_block}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo
