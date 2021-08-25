import React from 'react'
import { useState, useEffect } from 'react'
import '../Equipment.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Container,Row, Col, Card} from 'react-bootstrap'

const Equipment = () => {
    const [equipment, setEquipment] = useState([]);
  
    useEffect(() => {
        fetch("http://localhost:9292/equipment")
          .then(res => res.json())
          .then(setEquipment);
      }, []);
// console.log(equipment)

    return (
        <div>
            {/* <Card style={{ width: '18rem' }}>
            {equipment.map(equipment=> (
                <>
                <Card.Img variant="top" src={equipment.image_url}/>
                 <Card.body>
                 <Card.title>{equipment.name}</Card.title>
                 <Card.text>{equipemnt} </Card.text>
                </Card.body>
                
                <h4>Price: {equipment.price}</h4>
                </>
            ))}
            </Card> */}
        </div>
    )
}

export default Equipment

//reqs:
//create front end route to house back end data route (also create backend route)
//cards- CRD
//search

// stretch goals: 
//filter buttons/component 