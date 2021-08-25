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

const [randomEquipment, setrandomEquipment] = useState([])

useEffect(() => {
   handleClick()
  }, []);


const handleClick = () => {
    fetch("http://localhost:9292/equipmentrandom")
    .then((r) => r.json())
    .then((randomEquipment) => setrandomEquipment(randomEquipment));
}

    return (
        
<div>
   
    <div className="move">
        
        <div className="test" xs={3}>
      <div className="somethingnewtitle">
      <ul style={{listStyle: "none"}}><li>Discover</li><li>Something</li>  <li>New</li></ul>
      
      <div className="cardz">
      <img src={randomEquipment.image_url} style={{width:"300px", height:"200px"}}></img>
                <p>{randomEquipment.name}</p>
                <p>Price: {randomEquipment.price}</p>
                <button onClick={handleClick}>Click Me! </button>
                </div>
                </div>
      </div>
     </div>
     
      
    
        <p className="titleproduct">Products</p>
    
        <div className="body">
             {equipment.map(equipment=> (
                <div className="boxofcard">
               <div className="card">
                <img src={equipment.image_url} style={{width:"200px", height:"200px"}}></img>
                <p>{equipment.name}</p>
                <p>Price: {equipment.price}</p>
                </div>
                </div>
            ))}
            </div>
           </div>
    )
}

export default Equipment
