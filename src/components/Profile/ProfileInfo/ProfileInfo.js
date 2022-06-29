import React from "react"
import s from './profileInfo.module.css'

export default (props) => {
  return (
    <div>
      <div>
        <img src='https://html5css.ru/css/img_forest.jpg'/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

