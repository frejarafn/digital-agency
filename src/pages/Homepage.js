import "../styles/home.css";
import Categories from "../components/Categories";
import HeaderHome from "../components/HeaderHome";


export default function HomePage() {

    return (
        <section>
            <HeaderHome></HeaderHome>

            <img className="banner" src="/images/homebanner.png" alt=""></img>


            <div className="citycontainer">
                <img className="city" src="/images/cityscape.png" alt=""></img>
                <div className="text-block">
                    <h4>Aarhus</h4>
                </div>
            </div>


            <h2 className="home">Hvad vil du gerne opleve?</h2>

            <img className="banner" src="/images/hotspot.png" alt=""></img>






            <Categories></Categories>

            <h2 className="home">Opdag nye oplevelser</h2>
            <p className="homep">Kig igennem vores favoritter du bare må opleve når du besøger den kulturelle smilets by, Aarhus.</p>

        </section>
    )
}