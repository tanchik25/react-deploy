import {usersAPI} from "../../api/Api";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SHOW_USERS = 'GET_USERS';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const showUsers = (nextUsers) => ({type: SHOW_USERS, nextUsers})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})


export const requestUsersThunkCreator = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await usersAPI.getUsers();
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data));
    }
}

export const showMoreUsersThunkCreator = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.findUsers().then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(showUsers(data));
        });
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));

    let data = await apiMethod(userId);
    if (data.resultCode === 0 || data.resultCode === 1 ) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const followSuccessThunkCreator = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), follow);
    }
}

export const unfollowSuccessThunkCreator = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollow);
    }
}




