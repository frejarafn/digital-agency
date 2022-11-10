import "../styles/navigation.css";
import React from 'react';
import { NavLink } from "react-router-dom";
import {MdHome} from 'react-icons/md';
import {TbSearch} from 'react-icons/tb';
import {AiFillCalendar} from 'react-icons/ai';
import {IoIosSettings} from 'react-icons/io';
export default function Navbar() {

    return (
        <nav className="navbar">
            <NavLink to="/" end><MdHome/></NavLink>
            <NavLink to="/discover"><TbSearch/></NavLink>
            <NavLink to="/plan"><AiFillCalendar/></NavLink>
            <NavLink to="/settings"><IoIosSettings/></NavLink>
        </nav>
    )
}