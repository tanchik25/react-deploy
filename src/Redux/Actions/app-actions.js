import {getAuthUserData} from "./auth-actions";

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess());
    });
}





