import "../styles/attractions.css";
import Søgefelt from "../components/søgefelt";
import Header from "../components/Header";
import {MdOutlineAttractions} from 'react-icons/md';
export default function Attractions() {

    return (
        <section>
        <Header/>
            <h1 className="header-attractions"> <MdOutlineAttractions/>Attraktioner</h1>
        
        <Søgefelt/>
        
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