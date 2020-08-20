import React from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = (props) => {

    return (
        <nav className="sidebar">
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/dialogs">Messages</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/users">Find users</NavLink>
            <NavLink to="/settings">Settings</NavLink>
            <FriendsContainer/>
        </nav>
    );
}

export default Navbar;