// import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Container,Row, Col, Card,Button} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import CardHeader from 'react-bootstrap/esm/CardHeader'
// import GameList from './GameList'

const Randomizer = ({game, deleteItem}) => {

    const [randomData, setRandomData] = useState([])

    useEffect(() => {
       handleClick()
      }, []);

        // console.log(randomData.id)
    //   function deleteItem(id) {
    //     const deleteItem = games.filter(game => game.id !== id)
    //     setGames(deleteItem)
    // }
    
    const handleClick = () => {
        fetch("http://localhost:9292/random")
        .then((r) => r.json())
        .then((randomData) => setRandomData(randomData));
    }
   
    return (
        <>
        <h3>What should I play today?</h3>
        <Card style={{ width: '18rem' }}>
        <h3>{randomData.name}</h3>
        <h3>Release Date:{randomData.release_date}</h3>
        <h3>Price:{randomData.price}</h3>
        </Card>
         <Button onClick={handleClick}> Tell me!</Button>        
         </>

            // <div>
            //     <h3>{game.name}</h3>
            //     <h3>{game.release_date}</h3>
            //     <h3>{game.price}</h3>
            //     <h3>{game.genre}</h3>
            //     <img src={game.image}></img>
            // </div>
        // <Container>
        //     <Row>
        //         <Col>
        //             <h3>Today we're going to play...</h3>
        //             <Button onClick={handleClick}>Tell me already!!!</Button>
        //         </Col>
        //         <Col>
        //             <Card style={{ width: '18rem' }}>
        //                 <Card.Img variant="top" src="https://media.istockphoto.com/vectors/vector-girl-gamer-live-streaming-web-camera-vector-id1156503950?k=6&m=1156503950&s=612x612&w=0&h=FcEYLfqjCMes2fwJhETXIwI4Rt1OeHLHrTL-VNAPT3I=" />
        //                 <Card.Body>
        //                 <Card.Title>{game.name}</Card.Title>
        //                 <Card.Text>
        //                 This game is about blah blah blah blah blah blah blah blah blah blah 
        //                 </Card.Text>
                       
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //     </Row>
        // </Container>
    )
}

export default Randomizer
