const express= require('express')
const{getvideogame} = require("../functions/get");
const { getGameId } = require('../functions/getid');
const{postVideoGame} = require("../functions/post")
const videogameRouter= express.Router()

videogameRouter.get('/',getvideogame);
videogameRouter.get('/:id',getGameId)

videogameRouter.post('/',postVideoGame);
module.exports = {videogameRouter};