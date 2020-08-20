import React from 'react';
import './Chat.css';
import Image6 from './../../../img/a83223668c7a46238f7f91ce6dac9703.png'

const Chat = (props) => {
    return (
        <div className="dialogs__col">
            <div className="dialogs__profile">
                <div className="dialogs__avatar">
                    <img src={props.img} alt=""/>
                </div>
                <div className="dialogs__name">{props.name}</div>
            </div>
            <div className="dialogs__massage">
                <div className="dialogs__symbol">
                    <img src={Image6} alt=""/>
                </div>
                <div className="dialogs__text">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default Chat;