import React from 'react';
import './Profile.css';

const Profile = () => {
    return  (
        <div className='content'>
            <div>
                <img src='https://img.desktopwallpapers.ru/nature/pics/wide/1920x1200/849ec9470d6af3370b7526f08a3ef9dc.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;