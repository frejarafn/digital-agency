import "../styles/plan.css";
import {IoIosArrowDown} from 'react-icons/io';
import {FaPrint, FaBusAlt, FaEdit} from 'react-icons/fa';
import {RiDeleteBack2Fill} from 'react-icons/ri';
import {MdAddCircleOutline, MdKayaking} from 'react-icons/md';
import {IoMdCalendar} from 'react-icons/io';
import {HiOutlineTicket} from 'react-icons/hi';
import Header from "../components/Header";
export default function Plan() {

    return(
        <section>
            <Header/> 
             {/*intro*/}
            <h1 className="header-plan">Din Rejseplan</h1>
                   
            <h4 className="under-rubrik-plan"> Få et overblik over din rejse ved at tilføje rejsetider, destinationer, aktiviteter samt detaljer for overnatninger med mere. Start ved at vælge forudindstillingerne for din rejseplan herunder.</h4>

                <button className="dage-knap">Dato til og fra <IoMdCalendar className="kalender-ikon"/> <IoIosArrowDown className="pil-ned"/></button> 
                <button className="dage-knap">Gem eller print <FaPrint className="print-ikon"/> <IoIosArrowDown className="pil-ned"/></button>

            {/*rejsetider - kasser*/}
            <section>
                <h3 className="dag-overskrift">Mandag den 28. Oktober</h3>
                
                <div>
                    <div>
                        <button className="afgang-knap">Afgangstids <IoIosArrowDown className="pil-ned2"/></button> 
                        <button className="transport-knap">Transport <IoIosArrowDown className="pil-ned2"/></button>
                        <RiDeleteBack2Fill className="slet-ikon"/>
                    </div>
                    <div className="indholdskasse">
                        <p className="timing">10:30</p>
                        <p className="indholdstekst"> <FaBusAlt className="bus-ikon"/> Fra: Aarhus Hovedbanegård <br/><p className="indholdstekst2">Til: Marselisborg Dyrehave <FaEdit className="edit-ikon"/></p></p>
                    </div>
                </div>
                           
                <div>
                    <div>
                        <button className="ankomst-knap">Ankomsttid <IoIosArrowDown className="pil-ned2"/></button> 
                        <button className="aktivitet-knap">Aktivitet <IoIosArrowDown className="pil-ned2"/></button>
                        <RiDeleteBack2Fill className="slet-ikon"/>
                    </div> 
                    <div className="indholdskasse">
                        <p className="timing">10:45 </p>
                        <p className="indholdstekst"> <MdKayaking className="kajak-ikon"/><p className="indholdstekst3">Besøg Marselisborg Dyrehave <FaEdit className="edit-ikon2"/></p></p>
                    </div>
                </div>
                           
                <div>
                    <div>
                        <button className="afgang-knap">Afgangstids <IoIosArrowDown className="pil-ned2"/></button> 
                        <button className="transport-knap">Transport <IoIosArrowDown className="pil-ned2"/></button>
                        <RiDeleteBack2Fill className="slet-ikon"/>
                    </div> 
                    <div className="indholdskasse">
                        <p className="timing">14:00 </p>
                        <p className="indholdstekst"> <FaBusAlt className="bus-ikon"/> Fra: Aarhus Hovedbanegård <br/><p className="indholdstekst2">Til: Marselisborg Dyrehave <FaEdit className="edit-ikon"/></p></p>
                    </div>
                </div>

                <div className="tilføj">
                    <MdAddCircleOutline className="tilføj-ikon"/>
                    <p className="tilføj-tekst">Tilføj ny linje</p>
                </div>
                            <br></br>
                
                <h3 className="dag-overskrift">Tirsdag den 29. Oktober</h3>
                <div>
                    <div>
                        <button className="afgang-knap">Afgangstids<IoIosArrowDown className="pil-ned2"/></button> 
                        <button className="begivenhed-knap">Begivenhed <IoIosArrowDown className="pil-ned2"/></button>
                        <RiDeleteBack2Fill className="slet-ikon"/>
                    </div>
                    <div className="indholdskasse">
                        <p className="timing">10:45 </p>
                        <p className="indholdstekst"> <HiOutlineTicket className="ticket-ikon"/><p className="indholdstekst4">Gå til koncert ved Aarhus Musikhus <FaEdit className="edit-ikon3"/></p></p>
                    </div>
                </div>
            </section>
        </section>
    )
}