import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getGenres, postVideoGame } from "../redux/actions"
import "../css/createGame.css"
function validate(state){
  const error={}

  if(!state.name){
    error.name='Campo Requerido'
  }else if(state.name.length<5){
    error.name='Campo Requerido, Se nececita 5 carcacteres minimo'
  }
  if(!state.description){
    error.description='Campo Requerido'
  }
  if(!state.rating){
    error.rating='Campo Requerido'
  }else if(state.rating<0 || state.rating >5){
    error.rating='Campo Requerido el puntaje debe ser de 0 a 5'
  }
  if(state.genres.length===0){
    error.genres='Campo Requerido'
  }
  if(state.platforms.length===0){
    error.platforms='Campo Requerido'

  }

  return error
}
const CreateGames = (props) => {
  
  let plataformss = [
    "PC","PlayStation","Xbox","Nintendo Switch","iOS", "Android","Nintendo","PS Vita","PSP","Wii","Game Boy","Atari","SEGA","PS5","PS4","PS3","PS2","PS1",
  ];
  const dispatch = useDispatch();
  const genres=useSelector(state=>state.genres)
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
  const handleSelectP=(e)=>{
    e.preventDefault()
    if(!movie.platforms.includes(e.target.value)){
      setInput({
        ...movie,
        platforms:[...movie.platforms,e.target.value]
      })}else{
        console.log('Plataforma ya agregada.')
      }
  }
  const handleSelect=(e)=>{
    e.preventDefault()
    if(!movie.genres.includes(e.target.value)){
    setInput({
      ...movie,
      genres:[...movie.genres,e.target.value]
    })}else{
      console.log('genero ya agregado!')
    }
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
    <div className='creat' >
            <div>
      <Link to='/home'><button className=''>Regresar Al Home</button></Link>
      </div>
      <form onSubmit={e=> handleOnSubmit(e)}>
        <div className='cra1'>        
          <label>Nombre: </label>
        <input
            className={error?.name && 'danger'}
          type="text"
          name="name"
          value={movie.name}
          onChange={e=> handleInputChange(e)}
        />
         <span className='error'>{error?.name ||''}</span>
         </div>
         <div className='cra2'>
        <label>Puntaje:</label>
        <input
          type="number"
          name="rating"
          value={movie.rating}
          onChange={e=> handleInputChange(e)}
        />
          <span className='error'>{error?.rating ||''}</span>
          </div>
          <div  className='cra8'  >
        <label name="name">Description: </label>
        <textarea
          type="text"
          name="description"
          value={movie.description}
          onChange={e=> handleInputChange (e)}
        />
         <span className='error'>{error?.description ||''}</span>
         </div>
         <div className='cra3' >
        <label name="name">Slug: </label>
        <input

          type="text"
          name="slug"
          value={movie.slug}
          onChange={e=> handleInputChange(e)}
        />
        </div>
        <div className='cra4' >
         <label>Fecha </label>
        <input

          type="date"
          name="released"
          value={movie.released}
          onChange={(e)=>handleInputChange(e)}
        />
            <span className='error'>{error?.released ||''}</span>
</div>
<div className='cra5' >
         <label name="name">Image </label>
        <input

          type="text"
          name="background_image"
          value={movie.background_image}
          onChange={(e)=>handleInputChange(e)}
        />
           <span className='error'>{error?.background_image ||''}</span>
           </div>

           <br/>
<div className='cra6'>
<label>Generos:</label>
<select onChange={e=>handleSelect(e)}>
              <option hidden key={0}>select...</option>
            {genres.map(g=>{
              return(<option  key={g.id} value={g.name}>{g.name}</option>
            )})}
            </select> 
          <span className='error'>{error?.genres ||''}</span>

</div>


           {/* <label name="name">Generos </label>
           
        <input

          type="text"
          name="Genres"
          value={movie.genres}
          onChange={(e)=> handleInputChange(e)}
        />
         <span className='error'>{error?.genres ||''}</span>
 */}

<div className='cra7'>
<label name="name">Pataformas </label>
       <select onChange={e=>handleSelectP(e)}>
            <option hidden>select...</option>
          {plataformss.map(p=>{
            return(
              
              <option
              
              value={p}
              name='platforms'
              key={plataformss.indexOf(p)}
              >{p}</option>
              
              )
            })}
            </select>
            <span className='error'>{error?.plataformss ||''}</span>

</div>

  

        <button type="submit">Create Game</button>
      </form>

    </div>
  );
};

export default CreateGames;