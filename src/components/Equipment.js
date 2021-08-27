import { useState, useEffect } from 'react'
import '../Equipment.css'
import EquipmentHero from './EquipmentHero'


const Equipment = () => {
    const [equipment, setEquipment] = useState([]);
    const [ereview, setereview] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/equipment")
          .then(res => res.json())
          .then(setEquipment);
      }, []);
// console.log(equipment)

const [randomEquipment, setrandomEquipment] = useState([])

useEffect(() => {
    fetch("http://localhost:9292/ereviews")
      .then(res => res.json())
      .then(setereview);
  }, []);

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
        <EquipmentHero/>
         <p className="titleproduct">Products</p>
        <div className="body">{equipment.map(equipment=>(
            <div className="boxofcard">
                <div className="card" >
                    <img src={equipment.image_url} style={{width:"200px", height:"200px"}}></img>
                    <p>{equipment.name}</p>
                    <p>Price: {equipment.price}</p>
                </div> 
            
    </div>
   ))}  </div>
    </div>
    )
}

export default Equipment
