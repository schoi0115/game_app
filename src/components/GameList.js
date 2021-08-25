import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'




const GameList = ({game, deleteItem, onUpdateGame}) => {

  const [updatedName, setUpdatedName] = useState("");
  const [upDatedReleaseDate, setUpdatedReleaseDate] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");
  const [updateImage, setupdateImage] = useState("");
  const [updateUpdateGenre, setUpdateUpdateGenre] = useState("");

  const [editing, setEditing] = useState(false);
  


  function handleDeleteClick() {
    fetch(`http://localhost:9292/games/${game.id}`, {
      method: "DELETE",
    });
    deleteItem(game.id);
  }


  function handleGameFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/games/${game.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        name: updatedName,
        release_date: upDatedReleaseDate,
        price: updatedPrice,
        image: updateImage, 
        genre: updateUpdateGenre
    }),
    })
      .then((r) => r.json())
      .then((newGame) => {onUpdateGame(newGame);
      });
  }

  function handleEdit(){
    setEditing(!editing)
  }

    return (
    
    <div >
      <div>
          
      
      <img src={game.image} alt={game.name}></img>
      
      <br />
      <h5>Game Name: {game.name}</h5>

      <h5>Release Date{game.release_date}</h5>
  
      <h5>Price: ${game.price}</h5>

      <h5>Genre: {game.genre}</h5>



                  <button onClick={handleDeleteClick}>Delete</button>
                  <button onClick={handleEdit}>{!editing? "Edit" : "Close"}</button>
                    {editing?(
                    <div>
                    <form onSubmit={handleGameFormSubmit}>
                    <input
                    type="text"
                    placeholder="Game title"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                    />
   <br />
                    <input
                    type="text"
                    placeholder="Date"
                    value={upDatedReleaseDate}
                    onChange={(e) => setUpdatedReleaseDate(e.target.value)}
                    />
<br />
                    <input
                    type="number"
                    placeholder="Price"
                    value={updatedPrice}
                    onChange={(e) => setUpdatedPrice(e.target.value)}
                    />
       <br />
                    <input
                    type="string"
                    placeholder="Image"
                    value={updateImage}
                    onChange={(e) => setupdateImage(e.target.value)}
                    />
         <br />
                      <input
                    type="string"
                    placeholder="Genre"
                    value={updateUpdateGenre}
                    onChange={(e) => setUpdateUpdateGenre(e.target.value)}
                    />
                    <br />
                    <button type="submit" >Save</button>
                    
                  </form>
                </div>
                ) : (
                  null)
                    }

    
            </div>
          </div>
    )
}

export default GameList
