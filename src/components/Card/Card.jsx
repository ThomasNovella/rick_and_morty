import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className={styles.Probando}>
         <button className={styles.Boton} onClick={() => props.onClose(props.id)}>X</button>
         <img  src={props.image} alt="" />
         <Link to={`/detail/${props.id}`}><h2 className={styles.CardLetra}><li>{props.name}</li></h2></Link>
         <h2 className={styles.CardLetra}>{props.species}</h2>
         <h2 className={styles.CardLetra}>{props.gender}</h2>
      </div>
   );
}
