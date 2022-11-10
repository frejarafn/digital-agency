import "../navigation.css";
import { NavLink } from "react-router-dom";
import {MdHome} from 'react-icons/md';
import {TbSearch} from 'react-icons-/TbSearch';
import {AiFillCalendar} from 'react-icons/md';
export default function Navbar() {

    return (
        <div>
            <NavLink to="/" end><MdHome/></NavLink>
            <NavLink to="/discover" end><TbSearch/></NavLink>
            <NavLink to="/plan" end><AiFillCalendar/></NavLink>
            <NavLink to="/settings" end><MdHome/></NavLink>
        </div>
    )
}