import "../styles/hotel.css";
import Header from "../components/Header";
import {HiSearch} from 'react-icons/hi';
export default function HotelPage() {

    return (
        <section>
            <Header/>
            <h1 className="header-hotel">Vi anbefaler</h1>
            <h4 className="under-rubrik-hotel">Søg efter seværdigheder, aktiviteter, transport, hotel og meget mere. Tilføj de forskellige aktiviteter til din tidsplan ved at klikke på hjertet.</h4>
        
        <form className="søgefelt">
            <HiSearch className="søg-ikon"/>
            <input type="text" placeholder="Søg" name="search"/>
        </form>
        
        <section>
            <div class="row-hotel">
                <div class="column-hotel"> billede</div>
                <div class="column-hotel"> billede</div>
            </div>

            <div class="row-hotel">
                <div class="column-hotel"> billede</div>
                <div class="column-hotel"> billede</div>
            </div>

            <div class="row-hotel">
                <div class="column-hotel"> billede</div>
                <div class="column-hotel"> billede</div>
            </div>
        </section>
        </section>
    )
}