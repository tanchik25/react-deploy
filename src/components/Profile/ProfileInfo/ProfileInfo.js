import React, {useEffect, useState} from 'react';
import './ProfileInfo.css';
import Loader from "../../common/Preloader/Loader";
import userPhoto from "../../../img/user2.png"
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataFormReduxForm from "./ProfileDataForm/ProfileDataForm";
/*import ProfileDataFormFormik from "./ProfileDataFormFormik/ProfileDataFormFormik";*/


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    useEffect(() => {
        if (props.profileUpdateStatus === "success") {
            setEditMode(false);
        }
    }, [props.profileUpdateStatus]);

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
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result)
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        })
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData);
        if (props.profileUpdateStatus === "success") {
            setEditMode(false);
        }
    }

    return (
        <div className="content__item">
            <div className="content__header">
                <img src={props.profile.cover} alt=""/>
            </div>
            <div className="content__img">
                <div className="content__photo">
                    <img src={props.profile.photos != null
                        ? props.profile.photos
                        : userPhoto} alt=""/>
                </div>
                <div className="content__upload__btn__wrapper">
                    <button className="content__btn">Upload a file</button>
                    {props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
                </div>
            </div>
            <div className="content__text">
                <div className="content__name">{props.profile.name}</div>
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}
                                        userId={props.userId}/>
                {editMode
                    ? /*<ProfileDataFormFormik saveProfile={props.saveProfile}
                                             goToEditMode={()=>{setEditMode(false)}}
                                             profile={props.profile}/>*/
                    <ProfileDataFormReduxForm initialValues={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner}
                                   goToEditMode={() => {setEditMode(true)}}/>
                }
            </div>
        </div>
    );
}

export default ProfileInfo


