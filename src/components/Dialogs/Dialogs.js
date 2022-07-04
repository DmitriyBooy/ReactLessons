import React from "react"
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Dialogs'

const Dialogs = (props) => {

  let dialogsElements = props.data.dialogs.map((dialog, index) => <DialogItem name={dialog.name} id={dialog.id} idx={index} key={index}/>)
  let messagesElements = props.data.messages.map((message, index) => <Message message={message.message} idx={index} key={index}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs