import "../styles/discover.css";
import Header from "../components/Header";
import Søgefelt from "../components/søgefelt";
import {HiOutlineTicket} from 'react-icons/hi';
import {MdKayaking, MdOutlineAttractions} from 'react-icons/md';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import {RiHotelFill} from 'react-icons/ri';
import React from 'react';
import { NavLink } from "react-router-dom";

export default function Discover() {

    return (
        <section>
        <Header/>
            <h1 className="header-discover">Vi anbefaler</h1>
            <h4 className="under-rubrik-discover">Søg efter seværdigheder, aktiviteter, transport, hotel og meget mere. Tilføj de forskellige aktiviteter til din tidsplan ved at klikke på hjertet.</h4>
        
       <Søgefelt/>
        
        <br></br>

        <div className="mulighed">
            <div>   <IoIosArrowBack className="tilbage-pil"/> 
                <NavLink to ="/attractions"> <MdOutlineAttractions className="attraktioner1"/>
                    <p className="discover-tekst">Attraktioner</p>
                </NavLink>

                <NavLink to ="/hotel"> <RiHotelFill className="hotel1"/>
                    <p className="discover-tekst">Hotel</p>
                </NavLink>

                <NavLink to ="/events"> <HiOutlineTicket className="events1"/>
                    <p className="discover-tekst">Begivenheder</p>
                </NavLink>

                <NavLink to ="/activities"> <MdKayaking className="aktiviteter1"/>
                    <p className="discover-tekst">Aktiviteter</p>
                </NavLink>
                    <IoIosArrowForward className="frem-pil"/>
            </div>
        </div>

        <br></br>

        <section>
            <div class="row-discover">
                <div class="column-discover"> billede</div>
                <div class="column-discover"> billede</div>
            </div>

            <div class="row-discover">
                <div class="column-discover"> billede</div>
                <div class="column-discover"> billede</div>
            </div>

            <div class="row-discover">
                <div class="column-discover"> billede</div>
                <div class="column-discover"> billede</div>
            </div>
        </section>
        </section>
    )
}