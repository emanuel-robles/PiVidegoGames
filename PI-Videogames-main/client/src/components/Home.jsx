import { Fragment } from "react";
import { getGames, } from "../redux/actions"
import{orderAscDesc}from "../redux/actions"
import GameCard from "./GameCard"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Paginado from "./Paginado";
import SearchGames from "./SearchGame"
import  "../css/home.css" 
export default function Home() {
  const dispatch = useDispatch()
  const allGames = useSelector((state) => state.games)
  const [order,setOrder]=useState('')
  const [currentPage, setCurrentpage] = useState(1)
  const [charactersPerPage, setCharactersPerPage] = useState(15)
  const indexOfLastCharacters = currentPage * charactersPerPage
  const indexOfFirstCharacter = indexOfLastCharacters - charactersPerPage
  const currentCharacters = allGames.slice(indexOfFirstCharacter, indexOfLastCharacters) 
  const paginado = (pageNumber) => {
    setCurrentpage(pageNumber)
  }
  useEffect(() => {
    dispatch(getGames())
  }, [dispatch])


  const handleReload = () => {
    window.location.reload();
  };
  function handleOrderAscDesc(e){
    e.preventDefault()
    dispatch(orderAscDesc(e.target.value))
    setCurrentpage(1)
    setOrder(e.target.value)

  }
  

  return (
    <div className="home">
    

      <Link to="/Game">Crear VideoJuego</Link>
      <h1 className="game" >Games:</h1>

      <button onClick={() => handleReload()} >Cargar Videojuegos
      </button>
      <div>
      <div className="Selector">
    <h3>Order:</h3>
      <select onChange={e=>handleOrderAscDesc(e)}>
        <option hidden={true} value='none'>None</option>
        <option value='asc'>A-Z</option>
        <option value='desc'>Z-A</option>
      </select>
    </div>
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
   
        <SearchGames />
        <Paginado
          charactersPerPage={charactersPerPage}
          allGames={allGames.length}
          paginado={paginado}
        />
        {currentCharacters?.map((el) => {
          return (
            <Fragment>
              <Link to={"/videogames/" + el.id}>
                <GameCard name={el.name} background_image={el.background_image} genres={el.genres} />
              </Link>


            </Fragment>
          )
        }
        )
        }
      </div>
    </div>
  )


}