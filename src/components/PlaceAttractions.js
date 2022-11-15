import "../styles/categorysub.css";



export default function PlaceAttraction({ place }) {
    return <div className="categorysub" >

        <div>
            <img src={place.ImageUrl} alt="sdfsdf" />


            {place.Name}</div>
        {/* <div style={{float:"left", width:"75%"}}>{place.Category.Name}</div> */}
    </div>;
}