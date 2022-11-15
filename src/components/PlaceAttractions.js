import "../styles/categorysub.css";



export default function PlaceAttraction({ place }) {
    return <div className="categorysub" >

        <div>

        <div className="at-events">
                <div className="column-at"> <img src={place.ImageUrl} alt="sdfsdf" className="billede1" />
                <div className="column-at"> {place.Name}</div> </div>
                <div className="column-at"> </div>
        </div>
       

            </div>
        {/* <div style={{float:"left", width:"75%"}}>{place.Category.Name}</div> */}
    </div>;
}