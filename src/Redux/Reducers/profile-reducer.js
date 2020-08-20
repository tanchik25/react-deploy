import Image3 from "../../img/avatarka.jpg";
import Image4 from "../../img/avatarka2.jpg";
import myAvatar from "../../img/myavatar.jpg";
import {ADD_POST, DELETE_POST, SET_STATUS, SET_USER_PROFILE} from "../Actions/profile-actions";


let initialState = {
    posts: [
        {id: 1, post: 'Hey, why nobody love me?', likesCount: 1, img: Image3},
        {id: 2, post: 'It\'s our new program! Hey!', likesCount: 2, img: Image4},
    ],
    profile: null,
    status:""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                post: action.newPostText,
                likesCount: 0,
                img: myAvatar
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        default:
            return state;
    }
}


export default profileReducer;


