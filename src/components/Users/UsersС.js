import React from 'react';
import Users from "./Users";


class UsersC extends React.Component {

    componentDidMount() {
        this.props.requestUsersThunkCreator();
    }

    ShowMore = () => {
        this.props.showMoreUsersThunkCreator();
    }

    render() {

        return (

            <Users showMore={this.ShowMore}
                   users={this.props.users}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   followSuccessThunkCreator={this.props.followSuccessThunkCreator}
                   unfollowSuccessThunkCreator={this.props.unfollowSuccessThunkCreator}/>

        );
    }
}

export default UsersC;


