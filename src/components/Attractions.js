import React, { useEffect, useState } from 'react'
import PlaceAttraction from "./PlaceAttractions";

export default function Attractions(props) {
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {

        async function getAttractions() {
            const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/da/categories.json";
            const response = await fetch(url);
            const data = await response.json();
            const attractions = data.find(attraction => attraction.Id === +props.id)
            setAttractions(attractions.Children)
        }
        getAttractions();

    }, [props.id]);

    return (
        <>
            <h2>Kategorier</h2>
            {
                attractions.map(place => (<PlaceAttraction place={place} key={place.Id} />))
            }
        </>
    )
}