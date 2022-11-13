import "../styles/hotel.css";
import Header from "../components/Header";
import Søgefelt from "../components/søgefelt";
import {RiHotelFill} from 'react-icons/ri';
export default function HotelPage() {

    return (
        <section>
            <Header/>
                <div className="hotel">
                    <RiHotelFill className="hotel-ikon2"/>
                    <h1 className="header-hotel">  Overnatning</h1>
                </div>
                
        <Søgefelt/>
        
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