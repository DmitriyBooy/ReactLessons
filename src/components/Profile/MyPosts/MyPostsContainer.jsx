import {
  addPostCreator,
  updateNewPostTextCreator,
} from '../../../redux/reducers/ProfileReducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'
const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})
const mapDispatchToProps = (dispatch) => ({
    onPostChange: (text) => dispatch(updateNewPostTextCreator(text)),
    onAddPost: dispatch(addPostCreator()),
})

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
