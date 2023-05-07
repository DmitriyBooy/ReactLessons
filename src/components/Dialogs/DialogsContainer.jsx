import {
  sendMessageActionCreator,
  updateNewMessageTextCreator,
} from '../../redux/reducers/DialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  }
}
const mapDispatchToProps = (dispatch) => ({
  onNewMessageChange: (e) => dispatch(updateNewMessageTextCreator(e.target.value)),
  onSendMessageClick: () => dispatch(sendMessageActionCreator())
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer