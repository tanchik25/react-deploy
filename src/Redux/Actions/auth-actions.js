import {authAPI} from "../../api/Api";
import {stopSubmit} from "redux-form";

export const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const logIn = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logOut = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}



