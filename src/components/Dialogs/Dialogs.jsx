import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = ({ data }) => {
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
    </div>
  )
}

export default Dialogs
