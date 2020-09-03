import React from 'react';
import './ProfileData.css';

const ProfileData = (props) => {

    return (
        <div className="profile__data">
            <div className="btn__right">
                {props.isOwner && <button className="edit__btn"
                                          onClick={props.goToEditMode}>Edit</button>}
            </div>
            <div className="content__data">
                <div className="content__data__icons">
                    <div><i className="fas fa-birthday-cake"/></div>
                    <div><i className="fas fa-city"/></div>
                    <div><i className="fas fa-graduation-cap"/></div>
                    <div><i className="far fa-heart"/></div>
                </div>
                <div className="content__data__left">
                    <div>Birthday:</div>
                    <div>City:</div>
                    <div>Education:</div>
                    <div>Relationship status:</div>
                </div>
                <div className="content__data__right">
                    <div>{props.profile.birthday}</div>
                    <div>{props.profile.city}</div>
                    <div>{props.profile.education}</div>
                    <div>{props.profile.relationship}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileData