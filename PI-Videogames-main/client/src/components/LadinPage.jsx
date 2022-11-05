import React from "react";
import {Link} from "react-router-dom"
import  "../css/ladinPage.css" 

export default function LandigPage(){
    return(
        <div className="ladinPage" >
            <h1 className="ladin"
            
            >Game Library</h1>
           <Link to="/home">
            <button>Home</button>
           </Link>



        </div>
    )





}