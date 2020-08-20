import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className="post">
            <div className="post__item">
                <div className="post__img">
                    <img className="post__icon" src={props.icon} alt=""/>
                </div>
                <div className="post__message">{props.message}</div>
                <div className="post__likes">&#x2764; {props.likesCount}</div>
            </div>
        </div>
    );
}

export default Post;