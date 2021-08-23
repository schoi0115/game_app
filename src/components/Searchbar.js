import React from 'react'

const Searchbar = ({setSearch}) => {

    function handlechange(e){
        console.log(e.target.value)
    }
    
    return (
        <div>
            <label>
                <input
                type="text"
                placeholder="Search for a game..."
                onChange={handlechange}
                />
            </label>
        </div>
    )
}

export default Searchbar
