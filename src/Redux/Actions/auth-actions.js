import {authAPI, securityAPI} from "../../api/Api";
import {stopSubmit} from "redux-form";

export const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
export const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';


export const setAuthUserData = (userId, email, login, isAuth, captchaUrl) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth, captchaUrl}
})

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});


export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const logIn = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else { //если логинизация не прошла, то получаем капчу либо выводим ошибку
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl()); //диспатчим санку, если с сервера resultCode пришел 10
        } else {
            let message = response.messages.length > 0 ? response.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}));
        }
    }
}

export const logOut = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, null));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}



