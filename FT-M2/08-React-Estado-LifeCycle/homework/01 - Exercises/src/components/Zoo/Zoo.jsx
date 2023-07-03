import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";
export default function Zoo() {
  /*creamos la varible distractory zoo,setzoo*/
  /*añadimos las propiedades que queremos que tenga y que despues pasaremos por props*/
  const [zoo, setZoo] = React.useState([{zooName:"", animals:"", species:"", allAnimals:""}]);
  /*creamos la funcion handleinputchange*/
  const handleInputChange = (event) => {
    /*creamos una captura del valor de zooname*/
    setZoo({zooName: event.target.value});
  };

  return (
    <div>
      <label htmlFor="zooName">Zoo Name:</label>
      <input onChange={handleInputChange} type="text" id="zooName"  value={zoo.zooName}></input>
      <h1  name={zoo.zooName} >-</h1>
    </div>
  );
}
