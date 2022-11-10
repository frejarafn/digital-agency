import "../styles/setting.css";
import {IoIosArrowForward} from 'react-icons/io';

export default function Settings() {

    return(
        <section>
                    <h1 className="header-settings">Indstillinger & indhold</h1>
                        <hr className="linje"></hr>

                <div>
                    <p className="settings-tekst">Change language</p>
                        <button className="translate-knap"> English <IoIosArrowForward/></button>
                    <hr className="linje"></hr>
                </div>

                <div>
                    <p className="settings-tekst">Abonnere til vores nyhedsbreve</p> 
                    <IoIosArrowForward className="højre-pil"/>
                        <hr className="linje"></hr>
                </div>

                <div>
                    <p className="settings-tekst">Om VisitDenmark</p> 
                    <IoIosArrowForward className="højre-pil"/>
                        <hr className="linje"></hr>
                </div>

        </section>
    )
}
