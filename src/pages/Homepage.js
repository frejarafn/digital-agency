import "../styles/home.css";
import Categories from "../components/Categories";
import HeaderHome from "../components/HeaderHome";

export default function HomePage() {

    return (
        <section>
            <HeaderHome></HeaderHome>
            <img className="banner" src="/images/homebanner.png" alt=""></img>
            <h1>Velkommen</h1>
            <h1>Hej igen</h1>
            <Categories></Categories>
        </section>
    )
}