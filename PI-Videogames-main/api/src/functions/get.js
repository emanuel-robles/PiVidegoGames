const { bringInformation} = require("./Created")

const getvideogame = async function (req,res) {
    const name =req.query.name
    let videogamesTotal = await bringInformation();
    if(name){
        let charactername = videogamesTotal.filter(el => el.name.toLowerCase().includes(name))
        charactername.length ?
        res.statusCode(200).send(charactername):
        res.statusCode(404).send('No se encuentra la pelicula');
    }
    else {

        res.status(200).send(videogamesTotal)
    }
}
module.exports = {
    getvideogame
}