import "../styles/mad-drikke.css";
import Header from "../components/Header";
import Søgefelt from "../components/søgefelt";
import {MdFoodBank} from 'react-icons/md';
export default function MadDrikkePage() {

    return (
        <section>
            <Header/>
             {/*intro*/}
                <div className="hotel">
                    <MdFoodBank className="mad-drikke-ikon2"/>
                    <h1 className="header-mad-drikke">  Mad og Drikke</h1>
                </div>
        
        <Søgefelt/>
        
         {/*main indhold*/}
        <section>
            <div className="row-mad-drikke">
                <div className="column-mad-drikke"> billede</div>
                <div className="column-mad-drikke"> billede</div>
            </div>

            <div className="row-mad-drikke">
                <div className="column-mad-drikke"> billede</div>
                <div className="column-mad-drikke"> billede</div>
            </div>

            <div className="row-mad-drikke">
                <div className="column-mad-drikke"> billede</div>
                <div className="column-mad-drikke"> billede</div>
            </div>
        </section>
        </section>
    )
}