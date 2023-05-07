import profileReducer from './reducers/ProfileReducer'
import sidebarReducer from './reducers/SidebarReducer'
import dialogsReducer from './reducers/DialogsReducer'

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
      ],
      newMessageText: '',
    },
    sidebarPage: {}
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  },
}

export default store