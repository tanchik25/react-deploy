import Image3 from "../img/avatarka.jpg";
import Image4 from "../img/avatarka2.jpg";
import Image5 from "../img/d01a728316cc4c8ba6c0dcad23104fcf.png";
import Image8 from "../img/1.jpg";
import Image9 from "../img/2.jpg";
import Image10 from "../img/3.jpg";
import profileReducer from "./Reducers/profile-reducer";
import dialogsReducer from "./Reducers/dialogs-reducer";
import navbarReducer from "./Reducers/navbar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hey, why nobody love me?', likesCount: 1, img: Image3},
                {id: 2, post: 'It\'s our new program! Hey!', likesCount: 2, img: Image4},
            ],
            newPostText: 'it-kamasutra.com',
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Andrew', photo: Image8},
                {id: 2, name: 'Dmitry'},
                {id: 3, name: 'Sasha', photo: Image9},
                {id: 4, name: 'Sveta', photo: Image10},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Viktor'},
                {id: 7, name: 'Tatyana'},
                {id: 8, name: 'This is a list item'},
                {id: 9, name: 'Another list item'},
                {id: 10, name: 'Yup, another list item'},
            ],
            messages: [
                {
                    id: 1,
                    message: 'I am a normal popover and I can have text and everything',
                    user: 'Dmitry',
                    avatar: Image5,
                },
                {
                    id: 2,
                    message: 'I am a normal popover and I can have text and everything',
                    user: 'Me',
                    avatar: Image5,
                },
                {
                    id: 3,
                    message: 'I am a normal popover and I can have text and everything',
                    user: 'Me',
                    avatar: Image5,
                },
                {
                    id: 4,
                    message: 'I am a normal popover and I can have text and everything',
                    user: 'Dmitry',
                    avatar: Image5,
                },
            ],
            newMessageText: 'it-kamasutra.com',
        },

        navbarPage: {
            friends: [
                {img: Image8, name: 'Andrew'},
                {img: Image9, name: 'Sasha'},
                {img: Image10, name: 'Sveta'},
            ],
        }
    },
    _rerenderEntireTree() {
        console.log('State has changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer; // observer - это паттерн
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action)

        this._rerenderEntireTree(this._state);
    }
}


export default store;