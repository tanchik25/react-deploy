import React from 'react';
import './LoginForm.css';
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/Validation/Validators";
import {Input} from "../../common/FormsControls/FormsControls";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="login__input__box">
                <div>Email</div>
                <Field className="login__input" name={"email"}
                       placeholder="Email" component={Input}
                       validate={[requiredField]}/>
                <div className="login__type">Password</div>
                <Field className="login__input" name={"password"}
                       type="password" placeholder="Password"
                       component={Input} validate={[requiredField]}/>

                {captchaUrl && <div className="captcha">
                    <img src={captchaUrl} alt=""/>
                </div>}
                {captchaUrl && <Field className="captcha__input" name={"captcha"} type="text"
                                      placeholder="Symbols from image" component={Input}
                                      validate={[requiredField]}/>}
            </div>
            {error && <div className="common__error">{error}</div>}
            <div className="login__form">
                <div className="login__form__checkbox">
                    <Field component={"input"} type="checkbox"
                           name={"rememberMe"}/>
                    <div className="login__form__text">remember me</div>
                </div>
                <button className="login__form__button">Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login' //имя формы в state (state.form.login)
})(LoginForm);

export default LoginReduxForm;