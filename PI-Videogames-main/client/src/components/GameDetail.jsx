import React from "react";
import * as ReactRedux from 'react-redux';
import * as actions from "../redux/actions"


const GameDetail = (props) => {

  const id = props.match.params.id;
  const dispatch = ReactRedux.useDispatch();

  React.useEffect(
    () => {
      if(id) dispatch(actions.getDetail(id));
    },
    [dispatch, id]
  )

  let movieDetail = ReactRedux.useSelector(state => state.movieDetail)
  

  return (
    <div>
Estamos Trabajando para Usted...
    </div>
  );
};
export default GameDetail;

// <h1>{movieDetail.name}</h1>
// <img src={movieDetail.background_image} alt="movie"/>
// <p>Genres: {movieDetail.genres}</p>
// <p>{movieDetail.description}</p>
// <p>Slug: {movieDetail.slug}</p>
// <p>Puntaje: {movieDetail.rating}</p>
// <p>Fecha: {movieDetail.released}</p>
// <p>Plataformas: {movieDetail.platforms} </p>

