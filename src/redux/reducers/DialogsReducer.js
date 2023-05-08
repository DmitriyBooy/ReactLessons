const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      }
    case SEND_MESSAGE:
      return {
        ...state,
        newMessageText: '',
        messages: [
          ...state.messages,
          {
            message: state.newMessageText,
            id: state.messages.length + 1,
          }
        ],
      }
    default:
      return state
  }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})


export default dialogsReducer