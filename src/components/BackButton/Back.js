import { useNavigate } from "react-router-dom";
import './Back.css';
import { IoIosArrowBack } from 'react-icons/io';


// Freja
// Her ses en onClick funktion, hvor navigate bruges til at navigere 1 side tilbage når man trykker på billedet
export const Back = () => {
    let navigate = useNavigate();
    return (
        <>
            <button className="backbutton" onClick={() => navigate(-1)}>
                <IoIosArrowBack className="headerback"></IoIosArrowBack>
            </button>
        </>
    );
};