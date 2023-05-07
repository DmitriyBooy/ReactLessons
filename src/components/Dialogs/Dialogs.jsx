import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = ({ dialogs, messages, newMessageText, onSendMessageClick, onNewMessageChange }) => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
        {
          dialogs.map(({name, id}) => {
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
            messages.map(({message, id}) => {
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
              value={newMessageText}
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
