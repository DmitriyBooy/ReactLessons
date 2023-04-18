import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'

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

      <div className={s.messages}>
        <div className={s.message}>Привет</div>
        <div className={s.message}>Как дела</div>
        <div className={s.message}>Ыть тыгыдым</div>
      </div>
    </div>
  )
}

export default Dialogs
