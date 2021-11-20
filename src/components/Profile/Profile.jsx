import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return  (
        <div className={s.content}>
            <div>
                <img src='https://img.desktopwallpapers.ru/nature/pics/wide/1920x1200/849ec9470d6af3370b7526f08a3ef9dc.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;