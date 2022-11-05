const initialState = {
    games : [],
    genres:[],
    videogame:{}
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
          case 'clear_state':{
              return{
                  ...state,
                  videogame:{}
              }
          }
          case 'clear_vg':{
              return{
                  ...state,
                  videogames:[]
              }
          }
           case 'post_videogame':{
              return{
                  ...state}
          }
          case'get_by_name':{
              return{
                  ...state,
                  games:action.payload
              }
          }
          
  
           default:
               return state;
   
   
              }
   
  }
  export default rootReducer