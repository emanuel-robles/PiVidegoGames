const {Videogame, Genres} = require('../db');
const { Op } = require("sequelize");

const postVideoGame=async(req,res)=>{
    const{ name,
            description,
            slug,
            rating,
            released,
            background_image,
            genres,
            platforms
         } = req.body
    if(typeof name=='number') return res.status(404).send("The name can't be a number");
    if(rating<0 || rating>5) return res.status(404).send("the rating has to be beetwen 0 and 5");

    
    if(!name || !description || !platforms){
        return  res.status(404).send('Missing data');

    }else{
        const videogame= await Videogame.create({
            name,
            description,
            slug,
            rating,
            released,
            background_image,
            platforms,
            genres
        })

        const genresDB= await Genres.findAll({
            where:{
                name:{
                    [Op.in]: genres
                }
            }
        })
  
        await videogame.addGenres(genresDB)
    
       return  res.status(201).send(videogame);
    }

}
module.exports={
 
    postVideoGame,
  
};