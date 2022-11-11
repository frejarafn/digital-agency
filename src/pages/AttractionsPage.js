import "../styles/attractions.css";
import Header from "../components/Header";
import {HiSearch} from 'react-icons/hi';
import {MdOutlineAttractions} from 'react-icons/md';
export default function Attractions() {

    return (
        <section>
            <Header/>
            <h1 className="header-attractions"> <MdOutlineAttractions/>Attraktioner</h1>
            <h4 className="under-rubrik-attractions">tekst...</h4>
        
        <form className="søgefelt">
            <HiSearch className="søg-ikon"/>
            <input type="text" placeholder="Søg" name="search"/>
        </form>
        
        <section>
            <div class="row-attractions">
                <div class="column-attractions"> billede</div>
                <div class="column-attractions"> billede</div>
            </div>

            <div class="row-attractions">
                <div class="column-attractions"> billede</div>
                <div class="column-attractions"> billede</div>
            </div>

            <div class="row-attractions">
                <div class="column-attractions"> billede</div>
                <div class="column-attractions"> billede</div>
            </div>
        </section>
        </section>
    )
}