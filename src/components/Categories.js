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
            const filteredrest = [];

            // try {
            //     for (var i = 0; i < data.length; i++) {
            //         var place = data[i];
            //         if (place.MainCategory.Id == '62') {
            //             // console.log(place.Name + ' ' + place.MainCategory.Name);
            //             filteredrest.push(place)
            //         }
            //     }
            // } catch (error) {
            //     console.log('Oh come on! These should be easy peeps! What')
            // }
            // setCategories(filteredrest);
            setCategories(data)
        }
        getCategories();

    }, []);

    return (
        <>
            <h2>Places To Eat</h2>
            {
                categories.map(place => (<PlaceItem place={place} key={place.Id} />))
            }
        </>
    )
}