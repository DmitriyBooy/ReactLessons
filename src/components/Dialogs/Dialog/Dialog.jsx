import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = ({ name, id }) => {
  return (
    <div className={s.dialog}>
      <NavLink
        to={`/dialogs/${id}`}
        className={({ isActive }) => isActive ? s.active : ''}
      >
        {name}
      </NavLink>
    </div>
  )
}

export default Dialog
