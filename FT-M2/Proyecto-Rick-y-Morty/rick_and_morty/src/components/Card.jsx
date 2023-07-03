import React from 'react';
import styles from './card.module.css';
// colocamos todas ls props que estan decalradas en App.jsx
export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div className={styles.containerbox}>
      <div className={styles.cardbox}>
         <button className={styles.btn} onClick={onClose}>X</button>
         <img className={styles.imgpj} src={image} alt='' /> 
         <h2 className={styles.tipografia}>{name} </h2>
         <h2 className={styles.datos}>{species}</h2>
         <h2 className={styles.datos}>{gender}</h2>
      </div>
      </div>
     
   );
}
