import Card from '../Card/Card.jsx';
import styles from './Cards.module.css'

export default function Cards({characters, onClose}) {
   
   return (<div className={styles.Container}>
      {characters.map(characters => (<Card 
         id={characters.id}
         name={characters.name}
         gender={characters.gender}
         species={characters.species}
         image={characters.image}
         key={characters.name}
         onClose={onClose}
      />
     ))}
   </div>
   );
}
