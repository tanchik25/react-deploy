import {profileAPI} from "../../api/Api";

export const ADD_POST = 'ADD-POST';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_STATUS = "SET_STATUS";
export const DELETE_POST = "DELETE_POST";
export const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
export const SET_PROFILE_UPDATE_STATUS = "SET_PROFILE_UPDATE_STATUS";


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const setProfileUpdateStatus = (updateStatus) => ({type: SET_PROFILE_UPDATE_STATUS, updateStatus})


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);

    dispatch(setUserProfile(response));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.status));
}

export const updateStatus = (status, userId) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status, userId);

    if (response.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    dispatch(savePhotoSuccess(response.photos));
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.resultCode === 0) {
        dispatch(getUserProfile(userId));
        dispatch(setProfileUpdateStatus("success"));
    } else {
        dispatch(setProfileUpdateStatus("error"));
    }
}





