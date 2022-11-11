/*Places
*
*Component Functions to fetch and parse json data, example showing and writing filtering of categors
*Importing and Calling each place in a list of places to be rendered
*
*Author Jeffrey Serio
*/

import React, { useEffect, useState } from 'react'
import PlaceItem from "./PlaceItem";

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        async function getCategories() {
            const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/da/categories.json";
            const response = await fetch(url);
            const data = await response.json();
            setCategories(data)
        }
        getCategories();

    }, []);

    return (
        <>
            <h2 className='home'>Planlæg dit besøg i Aarhus</h2>
            {
                categories.map(place => (<PlaceItem place={place} key={place.Id} />))
            }
        </>
    )
}