/*
*PlaceItem
*Simple Component Function to stype and return a place to eat
*
*/
import "../styles/category.css";
import { Link } from "react-router-dom";


export default function PlaceItem({ place }) {
    return <Link to={'/attractions/' + place.Id}> <div className="category" >

        <img src={place.ImageUrl} alt="sdfsdf" />

        <div >{place.Name}</div>

        {/* <div style={{float:"left", width:"75%"}}>{place.Category.Name}</div> */}
    </div ></Link>;
}