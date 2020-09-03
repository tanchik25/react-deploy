import React, {Fragment} from 'react';
import styles from './ProfileDataFormFormik.module.css';
import {Field, Form, Formik, useField} from "formik";
import * as Yup from "yup";

const ProfileInput = (props) => {

    const [field, meta] = useField(props.name)

    const hasError = meta.error && meta.touched;

    return (
        <Fragment>
            <div className={styles.flexContainer}>
                <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
                    <input {...field} {...props}/>
                </div>
                {hasError &&
                <span className={styles.field__error}>
                {meta.error}
                </span>}
            </div>
        </Fragment>
    );
}

const validationSchema = Yup.object().shape({
    city: Yup.string()
        .required('Required')
})

const ProfileDataFormFormik = ({profile, ...props}) => {

    return (
        <Formik
            initialValues={{
                birthday: profile.birthday,
                city: profile.city,
                education: profile.education,
                relationship: profile.relationship
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                props.saveProfile(values);
                props.goToEditMode();
                console.log(values);
            }}>
            {() => (
                <Form>
                    <div className="profile__data">
                        <div className="btn__right">
                            <button className={styles.save__btn} type="submit"
                                    onClick={() => {}}>Save
                            </button>
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
                                <div className="input__row">
                                    <Field className={styles.info__input} name={"birthday"}
                                           placeholder="Not specified" type="text"/>
                                </div>
                                <ProfileInput className={styles.info__input} name={"city"}
                                              placeholder="Not specified" type="text"/>
                                <div className="input__row">
                                    <Field className={styles.info__input} name={"education"}
                                           placeholder="Not specified" type="text"/>
                                </div>
                                <div className="input__row">
                                    <Field className={styles.info__input}
                                           name={"relationship"} as="select">
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
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default ProfileDataFormFormik