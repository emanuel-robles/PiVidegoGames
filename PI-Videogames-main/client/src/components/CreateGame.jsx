import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getGenres, postVideoGame } from "../redux/actions"
import * as actions from "../redux/actions/index"
function validate(state){
  const error={}

  if(!state.name){
    error.name='The name of the Videogame is required.'
  }else if(state.name.length<5){
    error.name='The length of the videogame name has to be more than 5'
  }
  if(!state.description){
    error.description='the description is required'
  }
  if(!state.rating){
    error.rating='The rating is required'
  }else if(state.rating<0 || state.rating >5){
    error.rating='The rating has to be a value beetwen 0 and 5'
  }
  if(state.genres.length===0){
    error.genres='Should have at least 1 genre'
  }
  if(state.platforms.length===0){
    error.platforms='Should select at least 1 platform'

  }

  return error
}
// Si no lo hacen asi los test no van a correr.
const CreateMovie = (props) => {
  const dispatch = useDispatch();
  const [button,setButton]=useState(true)
  const [movie, setInput] = React.useState({
    name:"",
    description:"",
    slug:"",
    rating:"",
    released:"",
    background_image:"",
    genres:[],
    platforms:[],
     });
     useEffect(()=>{
      dispatch(getGenres())
    },[dispatch])
  
     const [error,setError]=useState({
      name:'',
      description:'',
      rating:'',
      genres:'',
    })
  const handleInputChange=(e)=>{
    e.preventDefault()
      setInput(prevState=>{
        const newState={
        ...movie,
        [e.target.name]:e.target.value
      };
      setError(validate(newState))
    return newState
    }) 
    if(Object.keys(error).length){
    setButton(false)}
  }
  const handleOnSubmit=(e)=>{
    e.preventDefault()
    if(!movie.name||!movie.rating||!movie.description||!movie.platforms || !movie.genres){
      return alert('incomplete fields.')
    }
    movie.name=movie.name.charAt().toUpperCase()+movie.name.slice(1)
    dispatch(postVideoGame(movie))
    setInput({
      name:'',
      description:'',
      rating:'',
      released:'',
      genres:[],
      platforms:[]
    })
    alert('Videogame created!')
  }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label name="name">Name: </label>
        <input
          type="text"
          name="name"
          value={movie.name}
          onChange={handleInputChange}
        />
        

        <label name="name">Puntaje:</label>
        <input
          type="number"
          name="rating"
          value={movie.rating}
          onChange={handleInputChange}
        />

        <label name="name">Description: </label>
        <textarea
          type="text"
          name="description"
          value={movie.description}
          onChange={handleInputChange}
        />

        <label name="name">Slug: </label>
        <input

          type="text"
          name="slug"
          value={movie.slug}
          onChange={handleInputChange}
        />
         <label name="name">Fecha </label>
        <input

          type="date"
          name="released"
          value={movie.released}
          onChange={handleInputChange}
        />
         <label name="name">Image </label>
        <input

          type="text"
          name="background_image"
          value={movie.background_image}
          onChange={handleInputChange}
        />
           <label name="name">Generos </label>
        <input

          type="text"
          name="Genres"
          value={movie.genres}
          onChange={handleInputChange}
        />
         <label name="name">Pataformas </label>
        <input

          type="text"
          name="platforms"
          value={movie.platforms}
          onChange={handleInputChange}
        />
        
        

        <button type="submit">Create Movie</button>
      </form>

    </div>
  );
};

export default CreateMovie;