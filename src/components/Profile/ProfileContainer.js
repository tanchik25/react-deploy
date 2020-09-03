import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateStatus} from "../../Redux/Actions/profile-actions";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.AuthorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     userId={this.props.match.params.userId || this.props.AuthorizedUserId}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile}
                     profileUpdateStatus={this.props.profileUpdateStatus}/>
        );
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    AuthorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    profileUpdateStatus: state.profilePage.profileUpdateStatus

});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

