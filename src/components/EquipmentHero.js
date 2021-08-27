import { useState, useEffect } from 'react'

const EquipmentHero = () => {
     const [randomEquipment, setrandomEquipment] = useState([]);
    
     useEffect(() => {
        handleClick()
       }, []);

     const handleClick = () => {
         fetch("http://localhost:9292/equipmentrandom")
         .then((r) => r.json())
         .then((randomEquipment) => setrandomEquipment(randomEquipment));
     }
    return (
        <div className="move">
             <div className="test" xs={3}>
                 <div className="somethingnewtitle">
                    <ul style={{listStyle: "none"}}><li>Discover</li><li>Something</li><li>New</li></ul>
                    <div className="cardz">
                        <img src={randomEquipment.image_url} style={{width:"400px", height:"400px"}}></img>
                        <p>{randomEquipment.name}</p>
                        <p>Price: {randomEquipment.price}</p>
                        <button onClick={handleClick}>Click Me! </button>
                     </div>
                </div>
             </div>
        </div>
        
    )
}
export default EquipmentHero
