import React from 'react';
import './Login.css';
import {reset} from "redux-form";
import LoginReduxForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {logIn} from "../../Redux/Actions/auth-actions";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    const onSubmit = (formValues, dispatch) => {
        props.logIn(formValues.email, formValues.password, formValues.rememberMe, formValues.captcha);
        console.log(formValues);
        dispatch(reset("login"));
    };

    if(props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className="login__box">
            <div className="login__header">
                <a href="#login" className="login__text">Login</a>
                <a href="#registration" className="login__text">Registration</a>
            </div>
            <div className="login__wrapper">
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {logIn})(Login);

