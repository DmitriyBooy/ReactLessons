import {
  sendMessageActionCreator,
  updateNewMessageTextCreator,
} from '../../redux/reducers/DialogsReducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'

const DialogsContainer = () => {
  return(
    <StoreContext.Consumer>
      {
        (store) => {
          const dispatch = store.dispatch
          const onSendMessageClick = () => dispatch(sendMessageActionCreator())
          const onNewMessageChange = (e) => dispatch(updateNewMessageTextCreator(e.target.value))

          return <Dialogs
            dialogs={store.getState().dialogsPage.dialogs}
            messages={store.getState().dialogsPage.messages}
            newMessageText={store.getState().dialogsPage.newMessageText}
            onNewMessageChange={onNewMessageChange}
            onSendMessageClick={onSendMessageClick}
          />
        }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer