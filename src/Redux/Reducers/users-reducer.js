import {
    FOLLOW,
    SET_USERS,
    SHOW_USERS,
    TOGGLE_IS_FETCHING,
    TOGGLE_IS_FOLLOWING_PROGRESS,
    UNFOLLOW
} from "../Actions/users-actions";
import {updateObjectInArray} from "../../utils/object-helpers";

let initialState = {
    users: [],
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })*/
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })*/
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            }
        case SHOW_USERS:
            return {
                ...state,
                users: [...state.users, ...action.nextUsers],
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId),
            }
        default:
            return state;
    }
}


export default usersReducer;


