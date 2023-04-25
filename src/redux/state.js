let rerenderEntireTree = () => {
  console.log('State changed')
}

const state = {
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
}

export const addPost = (message) => {
  state.profilePage.posts.push({
    message,
    id: state.profilePage.posts.length + 1,
    likesCount: 0
  })
  rerenderEntireTree()
}

export const changeNewPostText = (str) => {
  state.profilePage.newPostText = str
  rerenderEntireTree()
}

export const subscribe = (observer) => rerenderEntireTree = observer

export default state