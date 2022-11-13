import "../styles/søgefelt.css";
import {HiSearch} from 'react-icons/hi';

export default function Søgefelt() {

    return (
        <div>
            <form className="søgefelt">
                <HiSearch className="søg-ikon"/>
                <input type="text" placeholder="Søg" name="search" className="input-søge"/>
            </form>

            <div className="lille-tekst-container">
                <p className="lille-tekst">Sorter efter: <u>Popularitet</u>, Alfabetisk, Pris (lav til høj) </p>
            </div>

        </div>
    )
}