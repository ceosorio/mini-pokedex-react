import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokeInfo from '../../components/PokeInfo'
import './App.css'

function App() {
  const [poke, setPoke] = useState([])
  const [load, setLoad] = useState('true')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/pokemon/1',
      )
      setPoke(result.data)
    }
    fetchData()
    setTimeout(() => {
      setLoad(false)
    }, 1000)
  }, [])

  return (
    <div className="App">
      {load ? <p>Loading...</p> : (
        <PokeInfo poke={poke} />
      )}
    </div>
  )
}


export default App
