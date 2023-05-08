const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  newPostText: 'ЫТЬ ТЫГЫДЫМ',
  posts: [
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
  ],
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        newPostText: '',
        posts: [
          ...state.posts,
          {
            message: state.newPostText,
            id: state.posts.length + 1,
            likesCount: 0,
          }
        ]
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    default:
      return state
  }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer