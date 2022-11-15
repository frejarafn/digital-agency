import "../styles/category.css";



export default function PlaceAttraction({ place }) {
    return <div className="category" >

        <img src={place.ImageUrl} alt="sdfsdf" />

        <div >{place.Name}</div>
        {/* <div style={{float:"left", width:"75%"}}>{place.Category.Name}</div> */}
    </div>;
}