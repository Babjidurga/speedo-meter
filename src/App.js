import React,{useState} from 'react'
import Data from './city.json'

const App = () => {
  const [search,setSeatch] = useState("");
  return (
    <div>
      <center>
        <h4> Enter your city</h4>
        <input type='text' value={search} onChange={(e) => setSeatch(e.target.value)}/> <br/>
        {Data.filter(city => city.name.toLowerCase().includes(search.toLocaleLowerCase())).map(city => {
          return <div style={{"border":"1px solid black", "padding":"10px","margin":"10px","maxWidth":"70%"}}>
            {city.name}
          </div>
          })}
      </center>
    </div>
  )
}

export default App