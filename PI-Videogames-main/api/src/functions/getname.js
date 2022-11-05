const { default: axios } = require('axios');
const {Videogame, Genres} = require('../db');
const { namevideogame} = require("../functions/name");
const { bringInformationDatabase,Name } = require('./Created');

const getGameName = async (req,res)=> {
    try {
        console.log('Que sucede')
        const {name}=req.params;
        var game;
        // <=4 means it's from the API
        if(name){
            game= await Name(name);
            // console.log(getOneVideoGame(id))
            // console.log(game)
            game?res.send(game):res.status(404).send('Game not found');
        }
        // id>4 means it's from DB 
        else{
   
           res.status(404).send("No se ecncotro el juego")
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports={
    getGameName 
}
//quede explicado en detid