import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
        <Dialog
          name='Дима'
          id='1'
        />

        <Dialog
          name='Катя'
          id='2'
        />

        <Dialog
          name='Шампиньон'
          id='3'
        />
      </div>

      <div>
        <Message message='Пиривиривет' />
        <Message message='Ыть' />
        <Message message='А тут, тыгыдым' />
      </div>
    </div>
  )
}

export default Dialogs
