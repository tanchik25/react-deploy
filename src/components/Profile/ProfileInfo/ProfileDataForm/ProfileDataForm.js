import React from 'react';
import './ProfileDataForm.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControls/FormsControls";

const ProfileDataForm = ({profile, handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className="profile__data">
                <div className="btn__right">
                    <button className="save__btn" onClick={() => {}}>Save</button>
                </div>
                <div className="content__data">
                    <div className="content__data__icons">
                        <div><i className="fas fa-birthday-cake"/></div>
                        <div><i className="fas fa-city"/></div>
                        <div><i className="fas fa-graduation-cap"/></div>
                        <div><i className="far fa-heart"/></div>
                    </div>
                    <div className="content__data__left">
                        <div>Birthday:</div>
                        <div>City:</div>
                        <div>Education:</div>
                        <div>Relationship status:</div>
                    </div>
                    <div className="content__data__right">
                        <Field className="data__input" name={"birthday"}
                               placeholder="Not specified" component={Input} autoComplete="off"/>
                        <Field className="data__input" name={"city"}
                               placeholder="Not specified" component={Input} autoComplete="off"/>
                        <Field className="data__input" name={"education"}
                               placeholder="Not specified" component={Input} autoComplete="off"/>
                        <Field className="data__input" name={"relationship"} component="select">
                            <option>None selected</option>
                            <option>Unmarried</option>
                            <option>In a relationship</option>
                            <option>Engaged</option>
                            <option>Married</option>
                            <option>It's complicated</option>
                            <option>Actively searching</option>
                            <option>In love</option>
                            <option>In a civil union</option>
                        </Field>
                    </div>
                </div>
            </div>
        </form>
    );
}

const ProfileDataFormReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormReduxForm;
