import Card from './Card';

export default function Cards({characters} ) {
   return <div>
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
