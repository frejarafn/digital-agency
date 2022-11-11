import "../styles/home.css";
import Categories from "../components/Categories";
import Header from "../components/Header";

export default function HomePage() {

    return (
        <section>
            <Header></Header>
            <img className="banner" src="/images/homebanner.png" alt=""></img>
            <h1>Velkommen</h1>
            <h1>Hej igen</h1>
            <Categories></Categories>
        </section>
    )
}