import React from "react";
import s from './navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.active : ''} to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.active : ''} to={'/dialogs'}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.active : ''} to={'/news'}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.active : ''} to={'/music'}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.active : ''} to={'/settings'}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar