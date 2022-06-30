import React from "react"
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

export default (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={props.id.toString()}>{props.name}</NavLink>
    </div>
  )
}