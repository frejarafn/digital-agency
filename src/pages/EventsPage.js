import "../styles/events.css";
import Header from "../components/Header";
import {HiSearch, HiOutlineTicket} from 'react-icons/hi';
export default function Events() {

    return (
        <section>
            <Header/>
            <h1 className="header-events"> <HiOutlineTicket/>  Begivenheder</h1>
        
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