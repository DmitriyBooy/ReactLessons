import React from "react";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
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