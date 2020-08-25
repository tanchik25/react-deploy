import React from 'react';
import './ProfileInfo.css';
import Loader from "../../common/Preloader/Loader";
import userPhoto from "../../../img/user2.png"
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Loader/>
    }

    const mainPhotoSelected = async (e) => {
        if (e.target.files.length) {
            const file = e.target.files[0]
            const base64 = await convertBase64(file)
            props.savePhoto(base64)
        }
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () =>{
                resolve(fileReader.result)
            };

            fileReader.onerror = (error)=>{
                reject(error);
            };
        })
    }

    return (
        <div className="content__item">
            <div className="content__header">
                <img src={props.profile.cover} alt=""/>
            </div>
            <div className="content__img">
                <img src={props.profile.photos != null ? props.profile.photos : userPhoto} alt=""/>
            </div>
            <div className="content__text">
                <div className="content__name">{props.profile.name}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} userId = {props.userId}/>
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
            <div className="content__upload__btn__wrapper">
                <button className="content__btn">Upload a file</button>
                {props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
            </div>
        </div>
    );
}

export default ProfileInfo