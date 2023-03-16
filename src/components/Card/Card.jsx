import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../../redux/actions'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

export function Card(props) {

   useEffect(() => {
      props.myFavorite.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, []);

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         props.deleteFavorite(props.id)
      }else{
         setIsFav(true)
         props.addFavorite(props) //
      }
   }

   return (
      <div className={styles.Probando}>
         {
         isFav ? (
         <button onClick={handleFavorite}>❤️</button>
         ) : (
         <button onClick={handleFavorite}>🤍</button>
         )
}
         <button className={styles.Boton} onClick={() => props.onClose(props.id)}>X</button>
         <img  src={props.image} alt="" />
         <Link to={`/detail/${props.id}`}><h2 className={styles.CardLetra}><li>{props.name}</li></h2></Link>
         <h2 className={styles.CardLetra}>{props.species}</h2>
         <h2 className={styles.CardLetra}>{props.gender}</h2>
      </div>
   );
}

export function mapDispatchToProps (dispatch){
   return{
      addFavorite: (character)=>{
         dispatch(addFavorite(character))
      },
      deleteFavorite: (id)=>{
         dispatch(deleteFavorite(id))
      }
   }
}

export function mapStateToProps (state) {
   return {
      myFavorite: state.myFavorite
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
