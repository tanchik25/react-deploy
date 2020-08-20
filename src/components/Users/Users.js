import React from 'react';
import './Users.css';
import Loader from "../common/Preloader/Loader";
import User from "./User/User";

const Users = (props) => {

    let usersElements = props.users.map(u =>
        <User key={u.id}
              user={u}
              followingInProgress={props.followingInProgress}
              unfollowSuccessThunkCreator={props.unfollowSuccessThunkCreator}
              followSuccessThunkCreator={props.followSuccessThunkCreator}
        />)

    return (

        <div className="users">
            <div className="users__title">Users</div>
            {usersElements}
            {props.isFetching ? <Loader/> : null}
            <div className="button__center">
                <button className="users__show" onClick={props.showMore}>Show more</button>
            </div>
        </div>
    );
}

export default Users;