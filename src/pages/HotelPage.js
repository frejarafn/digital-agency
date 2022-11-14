import "../styles/hotel.css";
import Header from "../components/Header";
import Søgefelt from "../components/søgefelt";
import {RiHotelFill} from 'react-icons/ri';
export default function HotelPage() {

    return (
        <section>
            <Header/>
            {/*intro*/}
                <div className="hotel">
                    <RiHotelFill className="hotel-ikon2"/>
                    <h1 className="header-hotel">  Overnatning</h1>
                </div>
                
            <Søgefelt/>

         {/*main indhold*/}
        <section>
            <div class="row-hotel">
                <div className="column-hotel"> billede</div>
                <div className="column-hotel"> billede</div>
            </div>

            <div class="row-hotel">
                <div className="column-hotel"> billede</div>
                <div className="column-hotel"> billede</div>
            </div>

            <div class="row-hotel">
                <div className="column-hotel"> billede</div>
                <div className="column-hotel"> billede</div>
            </div>
        </section>
        </section>
    )
}