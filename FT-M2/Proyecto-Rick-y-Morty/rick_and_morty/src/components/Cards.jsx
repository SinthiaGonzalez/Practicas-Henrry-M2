import Card from './Card';
import styles from './card.module.css';
export default function Cards({characters} ) {
   return <div className={styles.divContainer} >
      {characters.map(({id,onClose,name,species,gender,image})=> 
      <Card 
       key={id} 
       onClose ={() => window.alert('Emulamos que se cierra la card')}
       name={name} 
       species={species} 
       gender={gender} 
       image={image}
        />)}
   </div>;
}
