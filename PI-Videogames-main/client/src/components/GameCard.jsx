import React from "react";
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';


// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.

const MovieCard = (props) => {

  const dispatch = useDispatch()  
  return (
    <div>
   
     <h3>{props.name}</h3>
     <img src={props.background_image} alt=" img not found" width="800px" height="800px" />
     <p>Genres: { props.genres.find(e=> e.name).name}</p>
  
     <Link to={`/videogames/${props.id}`}>{props.name}</Link>
    </div>
  );
};

export default MovieCard;



