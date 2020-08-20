import React, {useState, useEffect} from 'react';
import './ProfileStatus.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true); //изменяем свойство стейта, чтобы появился инпут для изменения статуса пользователя
    }
    const deactivateEditMode = () => {
        setEditMode(false); //изменяем свойство стейта, чтобы инпут исчез
        props.updateStatus(status, props.userId);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);


    return (
        <div className="status__block">
            {!editMode &&
            <div className="status__message" onDoubleClick={activateEditMode}>
                <div className="status__text">{props.status || "------"}</div>
            </div>
            }
            {editMode &&
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                   value={status} className="status__submit"/>
            }
        </div>
    );

}

export default ProfileStatusWithHooks