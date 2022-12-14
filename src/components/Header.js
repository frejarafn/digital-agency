import { NavLink } from "react-router-dom";
import "../styles/header.css";
import { Back } from "./BackButton/Back";



export default function Header() {
    return (
        <header>
            <Back></Back>
            <div className="headerflex">
                <NavLink className="headerlogo" to="/"><img src="/images/header.png" alt="Logo" /></NavLink>
            </div>
        </header>
    );
}