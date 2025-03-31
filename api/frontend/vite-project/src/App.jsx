import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [romaji, setRomaji] = useState("");
  const [hiragana, setHiragana] = useState("");
  const convertToHiragana = async() => {
      const response = await fetch("http://localhost:5000/api/convert/hiragana", 
      {
        method:"POST",
        body:JSON.stringify({romaji}),
        headers:{"Content-Type": "application/JSON"}
      });
      const data = response.json()
      setHiragana(data.hiragana || "")

    }

    console.log(hiragana);
    
    return(
      <div>
        <input type="text" value={romaji} onChange={(e)=>{setRomaji(e.target.value)}}>

        </input>
        <button onClick={convertToHiragana}>Convert to Hiragana</button>
        <div>
          <h2>Hiragana</h2>
          <p>{hiragana}</p>
        </div>
      </div>
    )
}

export default App
