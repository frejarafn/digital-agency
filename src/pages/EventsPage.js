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
                    <h1 className="header-events">  Events</h1>
                </div>

        <Søgefelt/>

         {/*main indhold*/}
        <section>
            <div className="row-events">
                <div className="column-events"> billede</div>
                <div className="column-events"> billede</div>
            </div>

            <div className="row-events">
                <div className="column-events"> billede</div>
                <div className="column-events"> billede</div>
            </div>

            <div className="row-events">
                <div className="column-events"> billede</div>
                <div className="column-events"> billede</div>
            </div>
        </section>
        </section>
    )
}