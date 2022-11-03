const { Router } = require('express');
const {bringInformation,bringInformationDatabase, returnAll, generateGenres} = require('../functions/Created.js')
const { videogameRouter} = require('../routes/get');
const { genresRouter} = require('./genres')
const express = require('express');
const router=express.Router();

router.use('/genres',genresRouter);
router.use('/videogames',videogameRouter);







module.exports = router;
