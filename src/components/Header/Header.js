import React from 'react';
import Image from '../../img/6ffaa98a51d44357ad91edb25fc8349c.png';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__block">
                <img src={Image} alt=""/>
                <div className="header__login">
                    {props.isAuth
                        ? <div>{props.login}
                        <button className="logout__btn" onClick={props.logOut}>Logout</button></div>
                        : <NavLink to={'/login'} className="login__link">Login</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;