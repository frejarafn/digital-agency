import "../styles/discover.css";
import Header from "../components/Header";
export default function Discover() {

    return (
        <section>
            <Header/>
            <h1 className="header-discover">Vi anbefaler</h1>
        
            <h4 className="under-rubrik-discover">Tekst..</h4>

            <div class="row-discover">
                <div class="column-discover"> billede</div>
                <div class="column-discover"> billede</div>
                <div class="column-discover"> billede</div>
            </div>

            <div class="row-discover">
                <div class="column-discover"> billede</div>
                <div class="column-discover"> billede</div>
                <div class="column-discover"> billede</div>
            </div>

            <div class="row-discover">
                <div class="column-discover"> billede</div>
                <div class="column-discover"> billede</div>
                <div class="column-discover"> billede</div>
            </div>
        
        </section>
    )
}