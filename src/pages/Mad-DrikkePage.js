import "../styles/mad-drikke.css";
import Header from "../components/Header";
import Søgefelt from "../components/søgefelt";
import {MdFoodBank} from 'react-icons/md';
export default function MadDrikkePage() {

    return (
        <section>
            <Header/>
                <div className="hotel">
                    <MdFoodBank className="mad-drikke-ikon2"/>
                    <h1 className="header-mad-drikke">  Mad og Drikke</h1>
                </div>
        
        <Søgefelt/>
        
        <section>
            <div class="row-mad-drikke">
                <div class="column-mad-drikke"> billede</div>
                <div class="column-mad-drikke"> billede</div>
            </div>

            <div class="row-mad-drikke">
                <div class="column-mad-drikke"> billede</div>
                <div class="column-mad-drikke"> billede</div>
            </div>

            <div class="row-mad-drikke">
                <div class="column-mad-drikke"> billede</div>
                <div class="column-mad-drikke"> billede</div>
            </div>
        </section>
        </section>
    )
}