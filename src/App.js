import { useState } from 'react'

const testBakcEnd = () => {
const url = `http://localhost:9292/games`
    
fetch(url)
.then(r=>r.json())
.then(console.log)

}

function App() {

  return (
    <div>
      <header>
        <button onClick={testBakcEnd}>fetch button</button>
      </header>
    </div>
  )
}

export default App;