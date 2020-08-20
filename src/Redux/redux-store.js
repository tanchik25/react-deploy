import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./Reducers/profile-reducer";
import dialogsReducer from "./Reducers/dialogs-reducer";
import navbarReducer from "./Reducers/navbar-reducer";
import usersReducer from "./Reducers/users-reducer";
import authReducer from "./Reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./Reducers/app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;


/*let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;*/

export default store;