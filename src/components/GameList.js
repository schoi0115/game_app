import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Container,Row, Col, Card} from 'react-bootstrap'

const GameList = ({game, deleteItem}) => {
  function handleDeleteClick() {
    fetch(`http://localhost:9292/games/${game.id}`, {
      method: "DELETE",
    });
    deleteItem(game.id);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
        score: score,
        user_id: userId,
        game_id: gameId,
      }),
    })
      .then((r) => r.json())
      .then((newReview) => onAddReview(newReview));
  }



    return (
        
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/video-game-controller-doodle-hand-drawn-vector-illustration-63395075.jpg" />
         <Card.Body>
           <Card.Title>{game.name}</Card.Title>
           <Card.Text>
                <li>Release date: {game.release_date}</li>
                <li>Price: {game.price}</li>
                <button onClick={handleDeleteClick}>Delete</button>
           </Card.Text>
         </Card.Body>
       </Card>
       
    )
}

export default GameList
