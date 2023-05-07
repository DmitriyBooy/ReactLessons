import React from 'react'
import {
  addPostCreator,
  updateNewPostTextCreator,
} from '../../../redux/reducers/ProfileReducer'
import MyPosts from './MyPosts'
import StoreContext from '../../../StoreContext'

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const addPost = () => store.dispatch(addPostCreator())
          const updateNewPostText = (text) => store.dispatch(updateNewPostTextCreator(text))

          return <MyPosts
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText}
            onPostChange={updateNewPostText}
            onAddPost={addPost}
          />
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer
