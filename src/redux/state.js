const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: 'Дима'
        },
        {
          id: 2,
          name: 'Катя'
        },
        {
          id: 3,
          name: 'Шампиньон'
        },
      ],
      messages: [
        {
          id: 1,
          message: 'Пиривиривет'
        },
        {
          id: 2,
          message: 'Ыть'
        },
        {
          id: 3,
          message: 'А тут, тыгыдым'
        },
      ]
    }
  },
  _rerenderEntireTree() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      this._state.profilePage.posts.push({
        message: this._state.profilePage.newPostText,
        id: this._state.profilePage.posts.length + 1,
        likesCount: 0
      })

      this._state.profilePage.newPostText = ''
      this._rerenderEntireTree(this.getState())
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._rerenderEntireTree(this.getState())
    }
  },
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionsCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  })

export default store