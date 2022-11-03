
import React, { Component } from "react";
import {getGames} from "../redux/actions"
import GameCard from "./GameCard"
import { Link } from "react-router-dom";
import  {useState,useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import Paginado from "./Paginado";
// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.
export default function Home (){
  const dispatch = useDispatch()
  const allGames = useSelector ((state) => state.games)
  const [currentPage,setCurrentpage]= useState(1)
  const[charactersPerPage,setCharactersPerPage]= useState(15)
  const indexOfLastCharacters = currentPage + charactersPerPage
  const indexOfFirstCharacter= indexOfLastCharacters - charactersPerPage
  const currentCharacters = allGames.slice(indexOfFirstCharacter,indexOfLastCharacters) // allCharacters == allGames
  const paginado = (pageNumber)=> {
    setCurrentpage(pageNumber)
  }

  
  useEffect(()=>{
      dispatch(getGames())
  },[dispatch])
  function handleClick(e){
      e.preventDefault();
      dispatch(getGames())
  }
  return (
    <div className="home">
       
        <Link to= "/Game">Crear VideoJuego</Link>
        <h1>Games:</h1>

  <button >Cargar Videojuegos
  </button>
  <div>
  <select>
          <option value= "asc">Asendente</option>
          <option value="desc">Desendente</option>
          </select>  
          <select>
              ratin = 0-5
              <option value="0-1">Muy Malo</option>
              <option value="1-2">Malo</option>
              <option value="2-3">Aceptable</option>
              <option value="3-4-">Bueno</option>
              <option value="4-5">Muy Bueno</option> 
          </select>
          <select>
              <option value="A-Z">Alfabeticamente</option>
          </select>
          <select>
              <option value="All">Todos</option>
              <option value="created">Creados</option>
              <option value="api">Existente</option>
          </select>
          <select>
        
       
          <option value="Indie">Independiente</option>
          <option value="Adventure">Aventura</option>
          <option value="Action">Acción</option>
          <option value="RPG">Juego De Rol</option>
          <option value="Strategy">Strategia</option>
          <option value="Shooter">Disparos</option>
          <option value="Casual">Juegos Casuales</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Simulation">Simulacion</option>
          <option value="Arcade">Arcade</option>
          <option value="Platformer">Plataforma</option>
          <option value="Racing">Juego De Carrera</option>
          <option value="Massively Multiplayer">Multijugador Masivo</option>
          <option value="Sports">Juegos De Deportes</option>
          <option value="Fighting">Pelea</option>
          </select>
          <Paginado
          charactersPerPage={charactersPerPage}
          allGames={allGames.length}
          paginado= {paginado}
          />
          { currentCharacters?.map((el)=>{
                return (
                    <fragment>
                        <Link to={"/home/" + el.id}>
                        <GameCard name={el.name} background_image= {el.background_image} genres={el.genres}/>
                        </Link>


</fragment>                )
            } 
               )
            }
    </div>
    </div>
)
//llegue hora


}