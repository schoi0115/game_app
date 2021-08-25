import 'bootstrap/dist/css/bootstrap.css'
import {Card,Button} from 'react-bootstrap'
import { useState, useEffect } from 'react'



const Randomizer = () => {

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
        <div className="cetering">
        <Card style={{ width: '18rem' }}>
        
        <h3>What should I play today?</h3>
        <br />
        <h3>{randomData.name}</h3>
        <h3>Release Date:{randomData.release_date}</h3>
        <h3>Price:{randomData.price}</h3>
        <Button onClick={handleClick}> Tell me!</Button>  
        </Card>
            
         </div>

    )
}

export default Randomizer
