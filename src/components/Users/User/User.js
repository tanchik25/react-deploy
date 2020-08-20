import React from 'react';
import './User.css';
import {NavLink} from "react-router-dom";
import userPhoto from "./../../../img/user.png";

const User = ({user, ...props}) => {
    return (
        <div className="users__item">
            <div className="users__right">
                <NavLink to={'/profile/' + user.id}>
                    <div className="users__avatar">
                        <img className="users__img" src={user.img != null ? user.img : userPhoto} alt=""/>
                    </div>
                </NavLink>
                {user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} className="users__btn" onClick={() => {
                                  props.unfollowSuccessThunkCreator(user.id)
                              }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)} className="users__btn" onClick={() => {
                                  props.followSuccessThunkCreator(user.id)
                              }}>Follow</button>}
            </div>
            <div className="users__left">
                <div className="users__data">
                    <div className="users__info">
                        <div className="users__basic__info">
                            <div className="users__name">{user.fullName}</div>
                            <div className="users__hometown">{user.location.country}, {user.location.city}</div>
                        </div>
                        <div className="users__text">{user.status}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;