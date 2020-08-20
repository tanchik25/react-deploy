import React, {Fragment} from 'react';
import './AddNewPostForm.css';
import {Form, Formik, useField} from 'formik';
import * as Yup from 'yup';
import styles from "../../../common/FormsControls/FormsControls.module.css";

const ProfileTextarea = (props) => {

    const [field, meta] = useField(props.name)

    const hasError = meta.error && meta.touched;

    return (
        <Fragment>
            <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
                <textarea {...field} {...props}/>
            </div>
            {hasError &&
            <span className={styles.field__error}>
                {meta.error}
            </span>}
        </Fragment>
    );
}

const validationSchema = Yup.object().shape({
    newPostText: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required')
})

const AddNewPostForm = (props) => {

    return (
        <Formik
            initialValues={{newPostText: ""}}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
                console.log(values)
                props.addPost(values.newPostText);
                resetForm();
            }}>
            {() => (
                <Form>
                    <div className="form__group">
                        <ProfileTextarea className="form__textarea" name="newPostText" placeholder="your news..."/>
                    </div>
                    <div className="form__right">
                        <button className="btn" type="submit">Send</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default AddNewPostForm;