import "../styles/categorysub.css";



export default function PlaceAttraction({ place }) {
    return <div className="categorysub" >

        <div>

            <div className="at-events">
                <div className="column-at"> <img src={place.ImageUrl} alt="sdfsdf" className="billede1" /> <h4 className="overskrifter1">{place.Name}</h4>
                    <div className="column-at" id="overskrifth4"> 
                    </div> </div>
                <div className="column-at"> </div>
            </div> 

        </div>
        {/* <div style={{float:"left", width:"75%"}}>{place.Category.Name}</div> */}
    </div>;
}