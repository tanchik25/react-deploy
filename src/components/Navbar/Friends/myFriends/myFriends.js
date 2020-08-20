import React from 'react';
import './myFriends.css';

const MyFriends = (props) => {
    return (
        <div className="myFriends__col">
            <div className="myFriends__avatar">
                <img src={props.img} alt=""/>
            </div>
            <div className="myFriends__name">{props.name}</div>
        </div>
    );
}

export default MyFriends;