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
  getState() {
    return this._state
  },
  _rerenderEntireTree() {
    console.log('State changed')
  },
  addPost() {
    this._state.profilePage.posts.push({
      message: this._state.profilePage.newPostText,
      id: this._state.profilePage.posts.length + 1,
      likesCount: 0
    })

    this._state.profilePage.newPostText = ''
    this._rerenderEntireTree(this.getState())
  },
  changeNewPostText(str) {
    this._state.profilePage.newPostText = str
    this._rerenderEntireTree(this.getState())
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer
  }
}

export default store