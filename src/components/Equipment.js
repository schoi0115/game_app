import { useState, useEffect } from 'react'
import '../Equipment.css'
import EquipmentHero from './EquipmentHero'

const Equipment = () => {
    const [equipment, setEquipment] = useState([]);
  
    useEffect(() => {
        fetch("http://localhost:9292/equipment")
          .then(res => res.json())
          .then(setEquipment);
      }, []);

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
            ))}
        </div>
    </div>
    )
}

export default Equipment

