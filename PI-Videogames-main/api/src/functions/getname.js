const { Name } = require('./Created');

const getGameName = async (req,res)=> {
    try {
        const {name}=req.params;
        var game;
    
        if(name){
            game= await Name(name);
   
            game?res.send(game):res.status(404).send('Game not found');
        }
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