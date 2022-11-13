import "../styles/events.css";
import Header from "../components/Header";
import Søgefelt from "../components/søgefelt";
import {HiOutlineTicket} from 'react-icons/hi';
export default function Events() {

    return (
        <section>
            <Header/>
             {/*intro*/}
                <div className="events">
                    <HiOutlineTicket className="events-ikon2"/>
                    <h1 className="header-events">  Begivenheder</h1>
                </div>

        <Søgefelt/>

         {/*main indhold*/}
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