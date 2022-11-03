import React from "react";
import * as ReactRedux from 'react-redux';
import * as actions from "../redux/actions/index"

// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.
// TIP: Aqui seria un buen momento para utilizar el hook useSelector.

const MovieDetail = (props) => {

  const id = props.match.params.id;
  const dispatch = ReactRedux.useDispatch();

  React.useEffect(
    () => {
      if(id) dispatch(actions.getMovieDetail(id));
    },
    [dispatch, id]
  )

  let movieDetail = ReactRedux.useSelector(state => state.movieDetail)
  

  return (
    <div>
      <h1>{movieDetail.name}</h1>
      <img src={movieDetail.background_image} alt="movie"/>
      <p>Genres: {movieDetail.Genres}</p>
      <p>{movieDetail.description}</p>
      <p>Slug: {movieDetail.slug}</p>
      <p>Puntaje: {movieDetail.rating}</p>
      <p>Fecha: {movieDetail.released}</p>
      <p>Plataformas: {movieDetail.platforms} </p>
    </div>
       
 
 
  );
};

export default MovieDetail;