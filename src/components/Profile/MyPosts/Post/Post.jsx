import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return  (
        <div className={s.item}>
            <img src="https://i.pinimg.com/736x/19/99/cc/1999cc3fd1013c39eae4682162ad2d27--avatar-james-cameron-avatar-fan-art.jpg" />
            post 1
        </div>
    );
}

export default Post;