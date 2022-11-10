import "../styles/navigation.css";
import React from 'react';
import { NavLink } from "react-router-dom";
import {MdHome} from 'react-icons/md';
import {HiSearch} from 'react-icons/hi';
import {AiFillCalendar} from 'react-icons/ai';
import {IoIosSettings} from 'react-icons/io';
export default function Navbar() {

    return (
        <nav className="navbar">
            <NavLink to="/" end><MdHome className="nav-icons"/>Home</NavLink>
            <NavLink to="/discover"><HiSearch className="nav-icons"/>Discover</NavLink>
            <NavLink to="/plan"><AiFillCalendar className="nav-icons"/>Plan</NavLink>
            <NavLink to="/settings"><IoIosSettings className="nav-icons"/>Settings</NavLink>
        </nav>
    )
}