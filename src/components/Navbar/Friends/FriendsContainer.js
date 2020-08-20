import './Friends.css';
import Friends from "./Friends";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        friends: state.navbarPage.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;