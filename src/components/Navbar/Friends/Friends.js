import React from 'react';
import './Friends.css';
import MyFriends from './myFriends/myFriends';
import {NavLink} from "react-router-dom";

const Friends = (props) => {

    let friendsElements = props.friends.map(f => <MyFriends name={f.name} img={f.img} key={f.id}/>)

    return (
        <div className="friends__sidebar">
            <NavLink to={"/friends"} className="friends__title">Friends</NavLink>
            <div className="friends">
                <div className="myFriends">
                    {friendsElements}
                </div>
            </div>
        </div>
    );
}

export default Friends;