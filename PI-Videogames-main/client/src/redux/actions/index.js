import axios from "axios"
export const  GET_GENRES='get_genres';
export const POST_VIDEOGAME='post_videogame';

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



export function searchVideoGames(){

    
    return async(dispatch)=>{
        try {
            const json=await axios.get('http://localhost:3001/videogames')
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






export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";
export const CREATE_MOVIE = "CREATE_MOVIE";
export const  GET_BY_NAME='get_by_name';
export const FILTER_BY_CREATED='filter_by_created';
let id = 5


export function filterByCreated(payload){
    return{
        type:FILTER_BY_CREATED,
            payload
    }
}




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

 export const getMovieDetail = (id) => {
    return async (dispatch) => {
   
       return (fetch(`https://api.rawg.io/api/games/${id}?key=a81ada6e4cc9422ebf5410e9c0696e01`)
       .then(response => response.json())
       .then(json => dispatch({type: GET_MOVIE_DETAILS, payload: json})))};
    
    
    };
   
   export const createMovie = (payload) => {
       return { 
           type: 'CREATE_MOVIE',
           payload: { ...payload,
             id: ++id 
      
           }
      
        }
   
    };