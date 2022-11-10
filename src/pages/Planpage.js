import "../styles/plan.css";
import {IoIosArrowDown} from 'react-icons/io';
import {FaPrint, FaBusAlt, FaEdit} from 'react-icons/fa';
import {RiDeleteBack2Fill} from 'react-icons/ri';
import Header from "../components/Header";
export default function Plan() {

    return(
        <section>
            <Header/> 
            <h1 className="header-plan">Din rejse rute</h1>
                   
            <h4 className="under-rubrik-plan"> tekst...</h4>

            <p className="rute-tekst">Print min rute <FaPrint className="print-ikon"/></p>
                <button className="dage-knap">Dage <IoIosArrowDown className="pil-ned"/></button> 
                <button className="dage-knap">Dage <IoIosArrowDown className="pil-ned"/></button>


            <section>
                <h3 className="dag-overskrift">Mandag den 28. Oktober</h3>
                
                <div>
                    <div>
                        <button className="afgang-knap">Tidspunkt for afgang <IoIosArrowDown className="pil-ned"/></button> 
                        <button className="transport-knap">Transport <IoIosArrowDown className="pil-ned"/></button>
                        <RiDeleteBack2Fill className="slet-ikon"/>
                    </div>
                    <div className="indholdskasse">
                        <p className="timing">10:30</p>
                        <p className="indholdstekst"> <FaBusAlt className="bus-ikon"/> Fra: Aarhus Hovedbanegård <br/> Til: Marselisborg Dyrehave <FaEdit className="edit-ikon"/></p>
                    </div>

                </div>

            </section>
        </section>
    )
}