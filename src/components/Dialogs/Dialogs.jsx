import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = () => {
  const dialogsData = [
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
  ]

  const messagesData = [
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

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
        {
          dialogsData.map(({name, id}) => {
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
          messagesData.map(({message, id}) => {
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
