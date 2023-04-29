import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ profileState, dispatch }) => {
  return (
    <div>
      <ProfileInfo />

      <MyPosts
        profileState={profileState}
        dispatch={dispatch}
      />
    </div>
  )
}

export default Profile
