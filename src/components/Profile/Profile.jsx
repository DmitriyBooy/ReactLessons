import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ profileState, addPost, changeNewPostText }) => {
  return (
    <div>
      <ProfileInfo />

      <MyPosts
        profileState={profileState}
        addPost={addPost}
        changeNewPostText={changeNewPostText}
      />
    </div>
  )
}

export default Profile
