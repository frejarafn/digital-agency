import { NavLink } from "react-router-dom";
import "../styles/header.css";



export default function HeaderHome() {
    return (
        <header>
            <div className="headerflex">
                <NavLink className="headerlogo" to="/"><img src="/images/header.png" alt="Logo" /></NavLink>
            </div>
        </header>
    );
}