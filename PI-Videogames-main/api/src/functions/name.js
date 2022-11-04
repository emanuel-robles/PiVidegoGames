

const {API_KEY}=process.env;
const {Videogame, Genres}= require('../db');
const axios= require('axios')

const namevideogame= async (name) => {
    try{
        const juego = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
        const game = {
            name:juego.data.name,
            description:juego.data.description,
            slug:juego.data.slug,
            rating:juego.data.rating,
            released:juego.data.released,
            background_image:juego.data.background_image,
            platforms:juego.data.platforms,
            createdVideoGame:false,
            genres:juego.data.genres
        }
        return game
    }
    catch (error){
        console.log(error)
    }
}
module.exports ={
namevideogame
}

