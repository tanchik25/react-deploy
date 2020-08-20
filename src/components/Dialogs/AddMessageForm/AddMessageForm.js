import React from 'react';
import './AddMessageForm.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/Validation/Validators";
import {DialogTextarea} from "../../common/FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field className="dialogs__form__textarea" name={"newMessageBody"}
                   placeholder="your message..."
                   component={DialogTextarea}
                   validate={[requiredField, maxLength30]}/>
            <div className="dialogs__form__right">
                <button className="dialogs__btn" type="submit">Send</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

export default AddMessageFormRedux;