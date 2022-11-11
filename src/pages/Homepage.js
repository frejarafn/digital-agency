import "../styles/home.css";
import Categories from "../components/Categories";
import HeaderHome from "../components/HeaderHome";

export default function HomePage() {

    return (
        <section>
            <HeaderHome></HeaderHome>

            <img className="banner" src="/images/homebanner.png" alt=""></img>


            <div class="citycontainer">
                <img className="city" src="/images/cityscape.png" alt=""></img>
                <div class="text-block">
                    <h4>Aarhus</h4>
                </div>
            </div>


            <h2 className="home">Hvad vil du gerne opleve?</h2>
            <Categories></Categories>
        </section>
    )
}