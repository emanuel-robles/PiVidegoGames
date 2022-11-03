const { default: axios } = require('axios');
const {Videogame, Genres} = require('../db');
const { idvideogame} = require("../functions/id");
const { bringInformationDatabase } = require('./Created');

const getGameId = async (req,res)=> {
    try {
        console.log('entro a la funcion')
        const {id}=req.params;
        var game;
        // <=4 means it's from the API
        if(id.length<5){
            game=await  idvideogame(id);
            // console.log(getOneVideoGame(id))
            // console.log(game)
            game? 
            res.send(game):
            res.status(404).send('Game not found');
        }
        // id>4 means it's from DB 
        else{
           const dbVideogames= await bringInformationDatabase();
           const videogame= dbVideogames.find(game=> game.id===id);
           videogame? 
           res.send(videogame):
           res.status(404).send("No se ecncotro el juego con el id",id)
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports={
getGameId    
}
//quede explicado en detid