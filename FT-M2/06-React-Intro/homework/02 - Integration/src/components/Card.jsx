import React from 'react';
// colocamos todas ls props que estan decalradas en App.jsx

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name} </h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2></h2>
         <h2></h2>
         <img src={image} alt='' /> 
         
      </div>
     
   );
}
