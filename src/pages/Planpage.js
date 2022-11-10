import "../styles/plan.css";
import {IoIosArrowDown} from 'react-icons/io';
export default function Plan() {

    return(
        <section>
            <h1 className="header-plan">Din rejse rute</h1>
                   
            <h4 className="under-rubrik-plan"> tekst...</h4>

            <button className="dage-knap">Dage <IoIosArrowDown/></button> 
            <button className="dage-knap">Dage <IoIosArrowDown/></button>

            <h3>Mandag den 28. Oktober</h3>
        </section>
    )
}