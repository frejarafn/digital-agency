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
            <NavLink to="/" end><MdHome className="nav-icons"/>Hjem</NavLink>
            <NavLink to="/discover"><HiSearch className="nav-icons"/>Opdag</NavLink>
            <NavLink to="/plan"><AiFillCalendar className="nav-icons"/>Planlæg</NavLink>
            <NavLink to="/settings"><IoIosSettings className="nav-icons"/>Indstillinger</NavLink>
        </nav>
    )
}