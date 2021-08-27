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

            
    )
}

export default Randomizer
