import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /*creamos la varible distractory zoo,setzoo*/
  /*añadimos las propiedades que queremos que tenga y que despues pasaremos por props*/
  const [zoo, setZoo] = React.useState({
    zooName:'',
    animals:[],
    species:[], 
    allAnimals:[],
    });

/*creamos el React.useEfects para hacer una peticion api, este metodo de react siempre lleva dos parametros, uno es una function y la otra es o un [] vacio indicando que el efect solo se ejecutara 1 vez, mas adelante se profundizara mas*/

React.useEffect(() => {
  /*dentro de la función colocaremos la petición fetch*/
  fetch('http://localhost:3001/zoo')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setZoo({
        zooName: '',
        animals: data.animals,
        species: data.species,
        allAnimals: data.animals,
      });
      console.log(zoo);
    })
    .catch((error) => console.log(error));
}, []);

React.useEffect(() => {
  console.log(zoo);
}, [zoo]);

  /*creamos la funcion handleinputchange, event toma los cambios en el input.target lo que hace es buscar el elemento en html que genero el cambio de event y guardarlo en este caso seria el input*/
  const handleInputChange = (event) => {
    /*creamos una captura del valor de zooname*/
    setZoo(prevZoo => ({...prevZoo, zooName: event.target.value}));
  };
 /*creamos las funciones handlespecies y handleAllspecies.*/ 
 const handleSpecies = (event) => {
  const selectedSpecies = event.target.value;
  const filteredAnimals = zoo.allAnimals.filter((animal) => animal.specie === selectedSpecies);
  setZoo((prevZoo) => ({ ...prevZoo, animals: filteredAnimals }));
};

const handleAllSpecies = () => {
  const allAnimals = zoo.allAnimals; // Almacena todos los animales sin filtrar
  setZoo((prevZoo) => ({ ...prevZoo, species: [], animals: allAnimals }));
};

  return (
    <div>
      <label htmlFor="zooname">Zoo Name:</label>
      <input
       onChange={handleInputChange}
       type="text" 
       id="zooname"
       value={zoo.zooName}>

       </input>
      
      <h1>{zoo.zooName}</h1>
      
      <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies} />
      <Animals animals={zoo.animals} />
    </div>
     
  );
   /* pasamos las props a los componentes Species y*/
   
}
