import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Detail = ({name, status, species, gender, origin, image})=>{
    
    const { id } = useParams();

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        const URL_BASE = 'https://be-a-rym.up.railway.app/api'
        const API_KEY= 'b33c183065d1.6a36b44c24d84b5e1b7d' 
        fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [id]);

    return(
        <div>
        <h2>{character.name}</h2>
        <h2>{character.status}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <img src={character.image} alt="" />

        </div>
    )
}
export default Detail;