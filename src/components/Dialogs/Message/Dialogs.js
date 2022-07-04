import React from "react"
import s from './Message.module.css'

export default (props) => {
  return (
    <div className={`${s.message} ${props.idx % 2 === 0 ? s.left : s.right}`}>
      {props.message}
    </div>
  )
}