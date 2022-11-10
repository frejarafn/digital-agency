import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <header>
            <div className="headerflex">
                <NavLink className="headerlogo" to="/"><img src="/images/header.png" alt="Logo" /></NavLink>
            </div>
        </header>
    );
}