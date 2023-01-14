import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {

    return (
    <div className={s.content}>
        <div>
            <img src="https://www.theirm.org/media/7515/rl-website-header-banner-1200x270-blank.jpg"
                 alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
    )
}

export default Profile