import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Container,Row, Col, Card} from 'react-bootstrap'

const GameList = ({game}) => {
    return (
        
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/video-game-controller-doodle-hand-drawn-vector-illustration-63395075.jpg" />
         <Card.Body>
           <Card.Title>{game.name}</Card.Title>
           <Card.Text>
                <li>Release date: {game.release_date}</li>
                <li>Price: {game.price}</li>
           </Card.Text>
         </Card.Body>
       </Card>
       
    )
}

export default GameList
