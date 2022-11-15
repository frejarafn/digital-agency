import "../styles/attractions.css";
import { useParams } from "react-router-dom";
import Søgefelt from "../components/søgefelt";
import Header from "../components/Header";
import { MdOutlineAttractions } from 'react-icons/md';
import Attractions from "../components/Attractions";

export default function AttractionsPage() {
    let params = useParams()

    return (
        <section>
            <Header />

            <Attractions id={params.Id}></Attractions>
            {/*intro*/}
            <div className="attraktion">
                <MdOutlineAttractions className="attraktion-ikon2" />
                <h1 className="header-attractions">Attraktioner</h1>
            </div>

            <Søgefelt />

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