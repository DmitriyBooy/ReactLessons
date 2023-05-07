import {
  sendMessageActionCreator,
  updateNewMessageTextCreator,
} from '../../redux/reducers/DialogsReducer'
import Dialogs from './Dialogs'

const DialogsContainer = ({ store }) => {
  const state = store.getState()
  const dispatch = store.dispatch

  const onSendMessageClick = () => dispatch(sendMessageActionCreator())

  const onNewMessageChange = (e) => dispatch(updateNewMessageTextCreator(e.target.value))


  return(
    <Dialogs
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      newMessageText={state.dialogsPage.newMessageText}
      onNewMessageChange={onNewMessageChange}
      onSendMessageClick={onSendMessageClick}
    />
  )
}

export default DialogsContainer