import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import {
  sendMessageActionCreator,
  updateNewMessageTextCreator,
}from '../../redux/DialogsReducer'

const Dialogs = ({ data, dispatch }) => {
  const onSendMessageClick = () => dispatch(sendMessageActionCreator())

  const onNewMessageChange = (e) => dispatch(updateNewMessageTextCreator(e.target.value))

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
        {
          data.dialogs.map(({name, id}) => {
            return (
              <Dialog
                name={name}
                id={id}
                key={id}
              />
            )
          })
        }
      </div>

      <div>
        <div>
          {
            data.messages.map(({message, id}) => {
              return (
                <Message
                  message={message}
                  key={id}
                />
              )
            })
          }
        </div>

        <div>
          <div>
            <textarea
              placeholder='Тыркаю букавы сюда'
              value={data.newMessageText}
              onChange={onNewMessageChange}
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>
              Тык
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
