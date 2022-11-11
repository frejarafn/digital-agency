import React, { useEffect, useState } from 'react'
import PlaceAttraction from "./PlaceAttractions";

export default function Attractions() {
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {

        async function getAttractions() {
            const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/da/data.json";
            const response = await fetch(url);
            const data = await response.json();
            setAttractions(data)
        }
        getAttractions();

    }, []);

    return (
        <>
            <h2>Kategorier</h2>
            {
                attractions.map(place => (<PlaceAttraction place={place} key={place.Id} />))
            }
        </>
    )
}