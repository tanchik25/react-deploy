import {profileAPI} from "../../api/Api";

export const ADD_POST = 'ADD-POST';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_STATUS = "SET_STATUS";
export const DELETE_POST = "DELETE_POST";


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

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





