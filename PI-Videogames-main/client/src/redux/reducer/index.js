const initialState = {
  games : [],
  genres:[]
}
function rootReducer (state= initialState,action){
 switch(action.type){
     case "GET_GAMES":
         return {
             ...state,
             games: action.payload
         }
         case 'get_genres':{
            return{
                ...state,
                genres:action.payload
            }   
        }
         case 'post_videogame':{
            return{
                ...state}
        }

         default:
             return state;
 
 
            }
 
}
export default rootReducer