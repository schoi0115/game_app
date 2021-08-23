import React from "react";

function GameContainer({game}){

    // function handleDeleteClick() {
    //     fetch(`http://localhost:9292/games/${game.id}`, {
    //       method: "DELETE",
    //     });
    //     deleteItem(game.id);
    //   }
    

    return (

   
        <div>

            <h1>Hello</h1>
        <h2>Title: {game.name}</h2>

        <h2>Date: {game.release_date}</h2>
        <h2>Price: {game.price}</h2>
        <h2>genre: {game.genre}</h2>
        <h2>company: {game.company.id}</h2>

        {/* <button onClick={handleDeleteClick}>Remove</button> */}
    
        </div>
    )
}
export default GameContainer;