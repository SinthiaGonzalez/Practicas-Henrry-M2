import styles from './card.module.css';
export default function SearchBar({onSearch,}) {
   return (
      
     <div className={styles.shearchC}>
         <h1 className={styles.tipografia}>Rick and Morty</h1>
         <div className={styles.inputContainer}>
         <input type='search' className={styles.input} placeholder='ESCRIBE AQUI'/>
         </div>
         <button className={styles.btn} onClick={ (id) => {onSearch (id) } }>Agregar</button> 
      </div>
     
   );
}

