import Image3 from "../../img/avatarka.jpg";
import Image4 from "../../img/avatarka2.jpg";
import profileReducer from "./profile-reducer";
import {addPostActionCreator, deletePost} from "../Actions/profile-actions";

let initialState = {
    posts: [
        {id: 1, post: 'Hey, why nobody love me?', likesCount: 1, img: Image3},
        {id: 2, post: 'It\'s our new program! Hey!', likesCount: 2, img: Image4}
    ]
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("it-kamasutra.com");
    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator("it-kamasutra.com");
    let newState = profileReducer(initialState, action);

    expect(newState.posts[2].post).toBe("it-kamasutra.com");
});

test('after deleting length of message should be decremented', () => {
    let action = deletePost(1);
    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(1);
});




