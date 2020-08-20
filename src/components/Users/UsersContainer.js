import {connect} from "react-redux";
import {
    requestUsersThunkCreator,
    showMoreUsersThunkCreator,
    followSuccessThunkCreator,
    unfollowSuccessThunkCreator
} from "../../Redux/Actions/users-actions";
import UsersC from "./UsersС";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getFollowingInProgressSelector,
    getIsFetchingSelector,
    getUsersSelector
} from "../../Redux/Selectors/users-selector";


/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}*/

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (user) => {
            dispatch(setUsersAC(user));
        },
        getUsers: (nextUsers) => {
            dispatch(getUsersAC(nextUsers));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}*/

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        requestUsersThunkCreator, showMoreUsersThunkCreator,
        followSuccessThunkCreator, unfollowSuccessThunkCreator
    })
)(UsersC);