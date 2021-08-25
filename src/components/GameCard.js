import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Container,Row, Col, Card} from 'react-bootstrap'


const GameCard = ({game,handleDeleteClick}) => {
    return (
        <>
       {game.map(game => {
        //    console.log(game.name)
           <li>{game.name}</li>
       })}
            {/* <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/video-game-controller-doodle-hand-drawn-vector-illustration-63395075.jpg" />
         <Card.Body>
           <Card.Title>{game.name}</Card.Title>
           <Card.Text>
                <li>Release date: {game.release_date}</li>
                <li>Price: {game.price}</li>
                <button onClick={handleDeleteClick}>Delete</button>
           </Card.Text>
         </Card.Body>
       </Card> */}
       </>
        
    )
}

export default GameCard
