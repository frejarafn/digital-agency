import "../styles/discover.css";
import Header from "../components/Header";
import {HiSearch} from 'react-icons/hi';
import {MdKayaking, MdOutlineAttractions} from 'react-icons/md';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import {HiOutlineTicket} from 'react-icons/hi';
import {RiHotelFill} from 'react-icons/ri';

export default function Discover() {

    return (
        <section>
            <Header/>
            <h1 className="header-discover">Vi anbefaler</h1>
            <h4 className="under-rubrik-discover">Søg efter seværdigheder, aktiviteter, transport, hotel og meget mere. Tilføj de forskellige aktiviteter til din tidsplan ved at klikke på hjertet.</h4>
        
        <form className="søgefelt">
            <HiSearch className="søg-ikon"/>
            <input type="text" placeholder="Søg" name="search"/>
        </form>
        
        <br></br>

        <div className="mulighed">
            <div>   <IoIosArrowBack className="tilbage-pil"/> 
                <a href="./AttractionsPage.js"> <MdOutlineAttractions className="attraktioner1"/>
                    <p className="discover-tekst">Attraktioner</p>
                </a>

                <a href="./AttractionsPage.js"> <RiHotelFill className="hotel1"/>
                    <p className="discover-tekst">Hotel</p>
                </a>

                <a href="./AttractionsPage.js"> <HiOutlineTicket className="events1"/>
                    <p className="discover-tekst">Begivenheder</p>
                </a>

                <a href="./AttractionsPage.js"> <MdKayaking className="aktiviteter1"/>
                    <p className="discover-tekst">Aktiviteter</p>
                </a>
                    <IoIosArrowForward className="frem-pil"/>
            </div>
        </div>

        <br></br>

        <section>
            <div class="row-discover">
                <div class="column-discover"> billede</div>
                <div class="column-discover"> billede</div>
            </div>

            <div class="row-discover">
                <div class="column-discover"> billede</div>
                <div class="column-discover"> billede</div>
            </div>

            <div class="row-discover">
                <div class="column-discover"> billede</div>
                <div class="column-discover"> billede</div>
            </div>
        </section>
        </section>
    )
}