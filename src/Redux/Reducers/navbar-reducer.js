import Image8 from "../../img/1.jpg";
import Image9 from "../../img/2.jpg";
import Image10 from "../../img/3.jpg";

let initialState = {
    friends: [
        {id: 1, img: Image8, name: 'Andrew'},
        {id: 2, img: Image9, name: 'Sasha'},
        {id: 3, img: Image10, name: 'Sveta'},
    ],
}

const navbarReducer = (state= initialState, action) => {
    return state;
}

export default navbarReducer;