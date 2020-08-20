import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../Redux/Actions/profile-actions";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.AuthorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus} userId = {this.props.match.params.userId || this.props.AuthorizedUserId}/>
        );
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    AuthorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

