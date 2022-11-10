import "../styles/setting.css";
import {IoIosArrowForward} from 'react-icons/io';
import Header from "../components/Header";
export default function Settings() {

    return(
        <section>
                <Header/>
                    <h1 className="header-settings">Indstillinger & Kontakt</h1>
                        <hr className="linje"></hr>

                <div className="setting">
                    <p className="settings-tekst">Skift Sprog <button className="translate-knap"> Dansk <IoIosArrowForward className="højre-pil1"/></button></p>
                    <hr className="linje"></hr>
                </div>

                <div className="setting">
                    <p className="settings-tekst">Tilmeld dig vores nyhedsbrev <IoIosArrowForward className="højre-pil2"/></p> 
                        <hr className="linje"></hr>
                </div>

                <div className="setting">
                    <p className="settings-tekst">Om VisitDenmark <IoIosArrowForward className="højre-pil3"/></p> 
                        <hr className="linje"></hr>
                </div>

        </section>
    )
}
