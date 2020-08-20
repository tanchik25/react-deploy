import Image5 from "../../img/d01a728316cc4c8ba6c0dcad23104fcf.png";
import Image8 from "../../img/1.jpg";
import Image9 from "../../img/2.jpg";
import Image10 from "../../img/3.jpg";
import {ADD_MESSAGE} from "../Actions/dialogs-actions";

let initialState = {
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
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: action.newMessageBody,
                user: 'Me',
                avatar: Image5,
            }
            return {
                ...state,
                messages: [...state.messages, (newMessage)],
            };
        default:
            return state;
    }
}


export default dialogsReducer;