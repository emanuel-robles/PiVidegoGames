import axios from "axios"

export const  GET_GAMES='GET_GAMES'; //=== GET_VG='get_videogames';
export const  GET_GENRES='get_genres'; // Create mov
export const POST_VIDEOGAME='post_videogame';//Create mov
export const  GET_BY_NAME='get_by_name'; //Search Game
export const FILTER_BY_GENRE='filter_by_genre'
export const CLEAR_STATE='clear_state';
export const CLEAR_VG='clear_vg';
export const  GET_BY_ID='get_by_id';
export const ORDER_ASC_DESC='order_asc_desc';
export const ORDER_BY_RATING='order_by_rating';
export const RATING4='rating4';
export const FILTER_BY_CREATED='filter_by_created';
export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";
export const CREATE_MOVIE = "CREATE_MOVIE";
let id = 5



export function getGames(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/videogames",{

        })
        return dispatch ({ 
            type: 'GET_GAMES',
            payload: json.data

        })
    }
}
export function getGenres(){
    return async function(dispatch){
     
            var json=await axios.get('http://localhost:3001/genres');
            return dispatch({
                type:'get_genres',
                payload:json.data
            })
      
    }
}
export function postVideoGame(payload){
    return async ()=>{
        const json= await axios.post('http://localhost:3001/videogames',payload)
        // console.log(json.data) 
        return {
            json
        }

    }

}
export function searchVideoGames(name){

    
    return async(dispatch)=>{
        try {
            const json=await axios.get('http://localhost:3001/videogames/name/'+ name)
           //  console.log(json.data)
            return dispatch({
                type:'get_by_name',
                payload:json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}




export function filterByGenre(payload){
    return{
        type:FILTER_BY_GENRE,
        payload
    }
}
export function clearState(){
    return {
        type:CLEAR_STATE
       
    }
}
export function clearVg(){
    return {
        type:CLEAR_STATE
       
    }
}
export function getDetail(id){
    return async function(dispatch){
        const json =await axios.get('http://localhost:3001/videogames/'+id)
        return dispatch({
            type:'get_by_id',
            payload:json.data
        })
    }
}
export function orderAscDesc(payload){
    return{
        type:ORDER_ASC_DESC,
        payload
    }
}  

export function orderRating(payload){
    return{
        type:ORDER_BY_RATING,
        payload
    }

} 
export function rating4(payload){
    return{
        type:RATING4,
        payload
    }

}

export function filterByCreated(payload){
    return{
        type:FILTER_BY_CREATED,
            payload
    }
}
export const createMovie = (payload) => {
    return { 
        type: 'CREATE_MOVIE',
        payload: { ...payload,
          id: ++id 
   
        }
   
     }

 };
 export function filterCharactersByStatus(payload){
    console.log(payload); 
    return {
        type: 'FILTER_BY_STATUS',
        payload
    }
 }
 export function filterCreated(payload){
    console.log(payload);
    return {
        type: 'FILTER_CREATED',
        payload
    }

 } 


   