import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = ({ messages, dialogs }) => {
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
    </div>
  )
}

export default Dialogs
