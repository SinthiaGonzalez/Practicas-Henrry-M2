
export default function SearchBar({onSearch,}) {
   return (
      <div className={styles.tipografia}>
         <input type='search'  />
         <button onClick={ (id) => {onSearch (id) } }>Agregar</button> 
      </div>
   );
}

