import "../styles/events.css";
import Header from "../components/Header";
import {HiSearch} from 'react-icons/hi';
export default function Events() {

    return (
        <section>
            <Header/>
            <h1 className="header-events">Vi anbefaler</h1>
            <h4 className="under-rubrik-events">Søg efter seværdigheder, aktiviteter, transport, events og meget mere. Tilføj de forskellige aktiviteter til din tidsplan ved at klikke på hjertet.</h4>
        
        <form className="søgefelt">
            <HiSearch className="søg-ikon"/>
            <input type="text" placeholder="Søg" name="search"/>
        </form>
        
        <section>
            <div class="row-events">
                <div class="column-events"> billede</div>
                <div class="column-events"> billede</div>
            </div>

            <div class="row-events">
                <div class="column-events"> billede</div>
                <div class="column-events"> billede</div>
            </div>

            <div class="row-events">
                <div class="column-events"> billede</div>
                <div class="column-events"> billede</div>
            </div>
        </section>
        </section>
    )
}