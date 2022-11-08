import { GET_GAMES } from "../actions";
const initialState = {
  games : [],
  gamescopy:[],
  genres:[],
  videogame:{}
}
function rootReducer (state= initialState,action){
 switch(action.type){
    case 'post_videogame':{
        return{
            ...state}
    }
    case GET_GAMES:
         return {
             ...state,
             games: action.payload,
             gamescopy:action.payload
         }
         case 'get_by_id':{
            return{
                ...state,
            videogame:action.payload}
        }
         case 'get_genres':{
            return{
                ...state,
                genres:action.payload
            }   
        }
        case'get_by_name':{
            return{
                ...state,
                games:action.payload
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
                games:[]
            }
        }
        case 'filter_by_genre':{
            const allvg=state.gamescopy
            const filteredVg=action.payload==='All'? allvg: allvg.filter(game=>game.genres?.includes(action.payload))
            return{
                ...state,
                videogames:filteredVg
            }
    }
    case 'filter_by_created':{
        const allvg=state.gamescopy
        const filteredVg=action.payload==='Created'?allvg.filter(v=>v.createdVideoGame):allvg.filter(v=>!v.createdVideoGame)
        return{
            ...state,
            games:action.payload==='All'?allvg:filteredVg
        }
    }
    case 'order_by_rating':{
        const allvg=state.gamescopy
        var orderedVg=allvg && allvg.sort(function(a,b){
            if(a.rating >b.rating){
                return 1;
            }
            if(a.rating <b.rating){
                return -1;
            }
            return 0
        })
        orderedVg=action.payload==='men'?orderedVg:orderedVg.reverse()
        // console.log(orderedVg)
        return{
            ...state,
            games:orderedVg
        }
        
    }
    case 'order_asc_desc':{
        const allvg=state.gamescopy
        console.log(allvg)
        var orderedVg1=allvg&&allvg.sort(function(a,b){
            if(a.name >b.name){
                return 1;
            }
            if(a.name <b.name){
                return -1;
            }
            return 0
        })
        console.log(orderedVg1)
        orderedVg1=action.payload==='asc'?orderedVg1: orderedVg1.reverse()
        return{
            ...state,
            games:orderedVg1
        }
    }
    case 'rating4':{
        const allvg=state.gamescopy;
        const filteredVg=allvg.filter(v=>v.rating>=4)
        return{
            ...state,
            games:filteredVg
        }
    }
     
  
        

         default:
             return state;
 
 
            }
 
}
export default rootReducer