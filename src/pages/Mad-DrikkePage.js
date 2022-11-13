import "../styles/mad-drikke.css";
import Header from "../components/Header";
import {HiSearch} from 'react-icons/hi';
export default function MadDrikkePage() {

    return (
        <section>
            <Header/>
            <h1 className="header-mad-drikke"> Mad og Drikke</h1>
        
        <form className="søgefelt">
            <HiSearch className="søg-ikon"/>
            <input type="text" placeholder="Søg" name="search"/>
        </form>
        
        <section>
            <div class="row-mad-drikke">
                <div class="column-mad-drikke"> billede</div>
                <div class="column-mad-drikke"> billede</div>
            </div>

            <div class="row-mad-drikke">
                <div class="column-mad-drikke"> billede</div>
                <div class="column-mad-drikke"> billede</div>
            </div>

            <div class="row-mad-drikke">
                <div class="column-mad-drikke"> billede</div>
                <div class="column-mad-drikke"> billede</div>
            </div>
        </section>
        </section>
    )
}