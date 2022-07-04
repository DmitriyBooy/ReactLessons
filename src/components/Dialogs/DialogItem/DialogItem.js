import React from "react"
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

export default (props) => {
  return (
    <div className={s.dialog}>
      <img
        className={s.avatar}
        src={'https://bipbap.ru/wp-content/uploads/2021/07/9-1.jpeg'}
      />
      <NavLink
      className={s.name}
        to={props.id.toString()}
      >
        {props.name}
      </NavLink>
    </div>
  )
}