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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name='Дима' id='1'/>
        <DialogItem name='Андрей' id='2'/>
        <DialogItem name='Света' id='3'/>
        <DialogItem name='Саша' id='4'/>
        <DialogItem name='Виктор' id='5'/>
        <DialogItem name='Валера' id='6'/>
      </div>
      <div className={s.messages}>
        <Message message='Привет'/>
        <Message message='Как дела?'/>
        <Message message='Yo'/>
      </div>
    </div>
  )
}

export default Dialogs