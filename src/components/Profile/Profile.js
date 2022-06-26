import React from "react";
import s from './profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://html5css.ru/css/img_forest.jpg'/>
            </div>
            <div>
                ava + description
            </div>
          <MyPosts />
        </div>
    )
}

export default Profile