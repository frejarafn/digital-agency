import "../styles/activities.css";
import Header from "../components/Header";
import {HiSearch} from 'react-icons/hi';
export default function activities() {

    return (
        <section>
            <Header/>
            <h1 className="header-activities">Aktiviteter</h1>
        
        <form className="søgefelt">
            <HiSearch className="søg-ikon"/>
            <input type="text" placeholder="Søg" name="search"/>
        </form>
        
        <section>
            <div class="row-activities">
                <div class="column-activities"> billede</div>
                <div class="column-activities"> billede</div>
            </div>

            <div class="row-activities">
                <div class="column-activities"> billede</div>
                <div class="column-activities"> billede</div>
            </div>

            <div class="row-activities">
                <div class="column-activities"> billede</div>
                <div class="column-activities"> billede</div>
            </div>
        </section>
        </section>
    )
}