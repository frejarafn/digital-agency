import "../styles/activities.css";
import Header from "../components/Header";
import Søgefelt from "../components/søgefelt";
import { MdKayaking } from 'react-icons/md';
import { HiSearch } from 'react-icons/hi';

export default function activities() {

    return (
        <section>
            <Header />
            {/*intro*/}
            <div className="activities">
                <MdKayaking className="activities-ikon2" />
                <h1 className="header-activities">  Aktiviteter</h1>
            </div>

            <Søgefelt />

            {/*main indhold*/}
            <section>
                <div class="row-activities">
                    <div class="column-activities"> billede</div>
                    <div class="column-activities"> billede</div>
                </div>

                <form className="søgefelt">
                    <HiSearch className="søg-ikon" />
                    <input type="text" placeholder="Søg" name="search" />
                </form>
            </section>

                <section>
                    <div class="row-activities">
                        <div class="column-activities"> billede</div>
                        <div class="column-activities"> billede</div>
                    </div>

                    <div class="row-activities">
                        <div class="column-activities"> billede</div>
                        <div class="column-activities"> billede</div>
                    </div>

                    <div class="row-activities">
                        <div class="column-activities"> billede</div>
                        <div class="column-activities"> billede</div>
                    </div>
                </section>
            </section>
            )
}