import React from "react"
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={props.id}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>
      {props.message}
    </div>
  )
}

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Дима'},
    {id: 2, name: 'Андрей'},
    {id: 3, name: 'Света'},
    {id: 4, name: 'Саша'},
    {id: 5, name: 'Виктор'},
    {id: 6, name: 'Валера'},
  ]

  let messagesData = [
    {id: 1, message: 'Привет'},
    {id: 2, message: 'Как дела?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name='Света' id='3'/>
        <DialogItem name='Саша' id='4'/>
        <DialogItem name='Виктор' id='5'/>
        <DialogItem name='Валера' id='6'/>
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
      </div>
    </div>
  )
}

export default Dialogs