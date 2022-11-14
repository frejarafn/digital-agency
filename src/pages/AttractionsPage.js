import "../styles/attractions.css";
import Søgefelt from "../components/søgefelt";
import Header from "../components/Header";
import {MdOutlineAttractions} from 'react-icons/md';
export default function Attractions() {

    return (
        <section>
        <Header/>
         {/*intro*/}
            <div className="attraktion">
                <MdOutlineAttractions className="attraktion-ikon2"/>
                <h1 className="header-attractions">Attraktioner</h1>
            </div>
        
        <Søgefelt/>
        
         {/*main indhold*/}
        <section>
            <div className="row-attractions">
                <div className="column-attractions"> billede</div>
                <div className="column-attractions"> billede</div>
            </div>

            <div className="row-attractions">
                <div className="column-attractions"> billede</div>
                <div className="column-attractions"> billede</div>
            </div>

            <div className="row-attractions">
                <div className="column-attractions"> billede</div>
                <div className="column-attractions"> billede</div>
            </div>
        </section>
        </section>
    )
}