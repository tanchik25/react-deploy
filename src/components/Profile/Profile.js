import React from 'react';
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className="content">
            <ProfileInfo profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} userId = {props.userId}
                         isOwner={props.isOwner} savePhoto={props.savePhoto}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;