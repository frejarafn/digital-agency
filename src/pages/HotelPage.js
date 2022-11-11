import "../styles/hotel.css";
import Header from "../components/Header";
import {HiSearch} from 'react-icons/hi';
export default function HotelPage() {

    return (
        <section>
            <Header/>
            <h1 className="header-hotel">Overnatning</h1>
        
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