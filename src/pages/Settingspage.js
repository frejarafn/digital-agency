import "../styles/setting.css";
import {IoIosArrowForward} from 'react-icons/io';
import Header from "../components/Header";
export default function Settings() {

    return(
        <section>
                <Header/>
                    <h1 className="header-settings">Indstillinger & indhold</h1>
                        <hr className="linje"></hr>

                <div className="setting">
                    <p className="settings-tekst">Skift sprog <button className="translate-knap"> Engelsk <IoIosArrowForward className="højre-pil1"/></button></p>
                    <hr className="linje"></hr>
                </div>

                <div className="setting">
                    <p className="settings-tekst">Abonnere til vores nyhedsbreve <IoIosArrowForward className="højre-pil2"/></p> 
                        <hr className="linje"></hr>
                </div>

                <div className="setting">
                    <p className="settings-tekst">Om VisitDenmark <IoIosArrowForward className="højre-pil3"/></p> 
                        <hr className="linje"></hr>
                </div>

        </section>
    )
}
