import React from "react";
export const GameCard = (props) => {
  return (
    <div>
   
     <h3>{props.name}</h3>
     <img src={props.background_image} alt=" img not found" width="800px" height="800px" />
     <p>Genres: { props.genres.find(e=> e.name).name}</p>
     <p>{props.name}</p>
    </div>
  );
};

export default GameCard;




