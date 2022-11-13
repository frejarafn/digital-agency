// input form til top.js component
import React from "react"

export default function Form({title, setTitle}) {

return (

 <input type="text"
  placeholder="Søg" 
  value= {title}
  name="text"
  className="Form-input"
  onChange={(e) => setTitle(e.target.value)}>
 </input> 
); 
} 
