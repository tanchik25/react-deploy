import React from 'react';
import './Dialogs.css';
import Chat from "./Chat/Chat";
import DialogItem from "./DialogItem/DialogItem";
import {reset} from "redux-form";
import AddMessageFormRedux from "./AddMessageForm/AddMessageForm";



const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name}
                                                                         id={d.id}
                                                                         photo={d.photo}
                                                                         key={d.id}/>)
    let massagesElements = props.dialogsPage.messages.map(m => <Chat text={m.message}
                                                                     name={m.user}
                                                                     img={m.avatar}
                                                                     key={m.id}/>)

    /*let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let textMessage = newMessageElement.current.value;
        props.updateNewMessageText(textMessage);
    }*/

    const onSubmit = (values, dispatch) => {
        props.addMessage(values.newMessageBody);
        dispatch(reset("dialogAddMessageForm"));
    };


    return (
        <div className="dialogs">

            <div className="dialogs__title">Dialogs</div>

            <div className="dialogs__table">
                <div className="dialogs__left">
                    {dialogsElements}
                </div>
                <div className="dialogs__right">
                    {massagesElements}

                    <div className="dialogs__form">
                        <AddMessageFormRedux onSubmit={onSubmit}/>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Dialogs;