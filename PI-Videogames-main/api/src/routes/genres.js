const express= require('express');
const{getGenre}=require('../functions/genre');
const genresRouter= express.Router()


genresRouter.get("/", getGenre);

module.exports={genresRouter};