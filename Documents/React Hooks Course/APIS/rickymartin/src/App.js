import React, { useState, useEffect } from 'react';
import Card from './components/Card'
import axios from 'axios'
import { getImages, saveImage } from './services/firebase'
import CharForm from './CharForm'
import './App.css';

function App() {

  const [characters, setCharacters] = useState([])

  const [info, setInfo] = useState({})
  let [char, setChar] = useState({})

  useEffect(() => {
    //getData()
    getFromFirebase()
  }, [])


  function getFromFirebase() {
    getImages()
      .then(images => {
        setCharacters(images)
      })
  }

  function getData(url = "https://rickandmortyapi.com/api/character") {
    axios.get(url)
      .then(response => {
        console.log(response)
        setCharacters(response.data.results)
        setInfo(response.data.info)
      }).catch(e => {
        console.log(e)
      })
  }

  function handleChange(e) {
    let c = { ...char }
    c[e.target.name] = e.target.value
    setChar(c)
    console.log("??", char)
  }

  function handleClick() {
    saveImage(char)
  }

  return (
    <div className="App">
      <h1>Ricymorty</h1>

      <CharForm onClick={handleClick} onChange={handleChange} />

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {characters.map((char, key) => (
          <Card key={key} {...char} />
        ))}
      </div>


      <button disabled={info.prev ? false : true} onClick={() => { getData(info.prev) }}>Prev</button>
      <button disabled={info.next ? false : true} onClick={() => { getData(info.next) }}>Next</button>

    </div>
  );
}

export default App;
