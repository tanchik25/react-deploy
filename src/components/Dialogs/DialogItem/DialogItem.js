import React from 'react';
import './DialogItem.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className="dialogs__users">
            <div className="dialogs__photo">
                <img className="dialogs__img" src={props.photo} alt=""/>
            </div>
            <div className="dialogs__user">
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogItem;