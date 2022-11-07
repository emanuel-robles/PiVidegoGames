const axios = require('axios');
const  {Videogame,Genres } = require('../db.js');
require("dotenv").config();

const { API_KEY } = process.env;
const bringInformation= async (name)=> {
    let pageOne = [];
    let pageTwo = [];
    let pageThree = [];

      if(!name){
        pageOne = await axios.get(
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`
        ); 
        let uri = pageOne.data.next
        pageOne = [...pageOne.data.results];
        pageTwo = await axios.get( 
          uri
        );
        uri = pageTwo.data.next

        pageTwo = [...pageTwo.data.results];

        pageThree = await axios.get( 
          uri
        );
        pageThree = [...pageThree.data.results];
        return[...pageOne, ...pageTwo,...pageThree];

     }else{
         const nameSanitizado = name.replaceAll(" ", "%20");
         const url = `https://api.rawg.io/api/games?key=${API_KEY}&search=${nameSanitizado}`;
           pageOne = await axios.get(url);
           return [...pageOne.data.results];
     }
}
const bringInformationDatabase= async ()=> {
  
  try{
    const DBinfo =  await Videogame.findAll({
          include:{
              model:Genres,
              atributes: ['name'],
              through:{
                  atributes: [],
              },
          }
  
      })
      const dbGame = await DBinfo.map((element)=> {
        return {
          name:element.name,
          description:element.description,
          slug:element.slug,
          rating:element.rating,
          released:element.released,
          background_image:element.background_image,
          Genres:e.genres.map(e=>e),
          platforms:element.platforms,
          createdVideoGame:element.createdVideoGame
         
        }
      })
    return dbGame
    }
  catch (error) {

    console.log(error)
  }
  
}
const returnAll = async () => {
    const apiInfo = await bringInformation();
    const dbInfo = await bringInformationDatabase();
    const infoTotal = apiInfo.concat(dbInfo); 
    return infoTotal 
}
async function generateGenres(){
  const genresInApi = await axios.get(`https://api.rawg.io/api/genres?key=a81ada6e4cc9422ebf5410e9c0696e01`);
  const apiData = genresInApi.data.results;

  apiData.forEach((x) => {
      Genres.findOrCreate({
          where: { name : x.name, id : x.id}
      });
  } );


  return 'Se ha retornado el genero';

} 


function Name(name){
  return bringInformation(name)
}

module.exports = {
  Name,
bringInformation,
 bringInformationDatabase, 
 returnAll,generateGenres

}


