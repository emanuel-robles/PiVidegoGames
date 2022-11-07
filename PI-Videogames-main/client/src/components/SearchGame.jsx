import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideoGames } from "../redux/actions"
export default function SearchBar() {
    const dispatch=useDispatch();
    const [name,setName]=useState('')  
  
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(searchVideoGames(name))
        setName('')
    }

    return (
    <form>
        <div>
        <input
        className="searchbar"
        type='text'
        name='name'
        value={name}
        placeholder='Search Videogame...'
        onChange={e=>handleInputChange(e)}
        />

        <button type='submit' className="button" onClick={e=>handleSubmit(e)}>Search</button>
        </div>
    </form>
  )
}