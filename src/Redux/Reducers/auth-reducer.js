import {GET_CAPTCHA_URL_SUCCESS, SET_USER_DATA} from "../Actions/auth-actions";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null //if null, then captcha is not required
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


export default authReducer;