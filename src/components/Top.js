// toppen til undersiderne. 
import React from "react"; 
import '../styles/top.css'; 
import Headline from '../components/Headline';
import Form from '../components/Form';
import Filtrering from '../components/Filtrering';


export default function Top() {

    return (
      <section className="Kategori_top">
        <Headline name="Attraktioner"/>
        <Form /> 
        <div className="sortering">
        <div>
        <p>Sorter efter:</p>
        </div>
        <div> 
         <button>
         <Filtrering name="Popularitet"/>
         </button>
         <button>
         <Filtrering name="Alfabetisk"/>
         </button>
         <button>
         <Filtrering name="Pris"/>
         </button>
         </div>
        </div>
      </section>
    )
}