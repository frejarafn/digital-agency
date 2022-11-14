import "../styles/discover.css";
import Header from "../components/Header";
import {HiSearch,HiOutlineTicket} from 'react-icons/hi';
import {MdKayaking, MdOutlineAttractions} from 'react-icons/md';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import {RiHotelLine} from 'react-icons/ri';
import React from 'react';
import { NavLink } from "react-router-dom";

export default function Discover() {

    return (
        <section>
        <Header/>
         {/*intro*/}
            <h1 className="header-discover">Vi anbefaler</h1>
            <h4 className="under-rubrik-discover">Søg efter seværdigheder, aktiviteter, transport, hotel og meget mere. Tilføj de forskellige aktiviteter til din tidsplan ved at klikke på hjertet.</h4>
        
        <form className="søgefelt2">
            <HiSearch className="søg-ikon2"/>
            <input type="text" placeholder="Søg" name="search" className="input-søge2"/>
        </form>
        
        <br></br>

         {/*indholds mulighed*/}
        <div className="mulighed">  
                <div className="mulighedsikoner">
                        <IoIosArrowBack className="tilbage-pil"/> 
                    <NavLink to ="/attractions"><MdOutlineAttractions className="attraktioner1"/></NavLink>
                    <NavLink to ="/hotel"> <RiHotelLine className="hotel1"/> </NavLink>
                    <NavLink to ="/events"> <HiOutlineTicket className="events1"/> </NavLink>
                    <NavLink to ="/activities"> <MdKayaking className="aktiviteter1"/> </NavLink>
                        <IoIosArrowForward className="frem-pil"/>
                </div>
                <div className="mulighedstekst">
                    <NavLink to ="/attractions"><p className="discover-ikon-tekst">Attraktioner</p></NavLink>
                    <NavLink to ="/hotel"> <p className="discover-ikon-tekst">Hotel</p> </NavLink>
                    <NavLink to ="/events"><p className="discover-ikon-tekst">Events</p> </NavLink>
                    <NavLink to ="/activities"><p className="discover-ikon-tekst">Aktiviteter</p></NavLink>
                </div>

                <br/>
        </div>

         {/*sortering*/}
        <div className="lille-tekst-container2">
            <p className="lille-tekst2">Sorter efter: <u>Popularitet</u>, Alfabetisk, Pris (lav til høj) </p>
        </div>


         {/*main indhold*/}
        <section>
            <div className="row-discover">
                <div className="column-discover"> billede</div>
                <div className="column-discover"> billede</div>
            </div>

            <div className="row-discover">
                <div className="column-discover"> billede</div>
                <div className="column-discover"> billede</div>
            </div>

            <div className="row-discover">
                <div className="column-discover"> billede</div>
                <div className="column-discover"> billede</div>
            </div>
        </section>
        </section>
    )
}