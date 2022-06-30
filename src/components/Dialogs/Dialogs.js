import React from "react"
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Dialogs'

const Dialogs = (props) => {

  let dialogs = [
    {id: 1, name: 'Дима'},
    {id: 2, name: 'Андрей'},
    {id: 3, name: 'Света'},
    {id: 4, name: 'Саша'},
    {id: 5, name: 'Виктор'},
    {id: 6, name: 'Валера'},
  ]

  let messages = [
    {id: 1, message: 'Привет'},
    {id: 2, message: 'Как дела?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
  ]

  let dialogsElements = dialogs.map((dialog, index) => <DialogItem name={dialog.name} id={dialog.id} key={index}/>)
  let messagesElements = messages.map((message, index) => <Message message={message.message} key={index}/>)

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