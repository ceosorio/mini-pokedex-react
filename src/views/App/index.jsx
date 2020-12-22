/* eslint-disable react/button-has-type */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './App.css'
import PokeFetch from 'components/PokeFetch'
import axios from 'axios'

function App() {
  const limit = 4
  const [offSet, setOffSet] = useState(0)
  const [dataState, setDataState] = useState({
    next: null,
  })


  function Pages(data) {
    return (
      <div className="text-center">
        <button
          disabled={!data.previous}
          className="disabled:opacity-55 bg-red-500 text-white active:bg-red-800 font-bold uppercase text-xs px-4 py-2 rounded-full shadow focus:shadow-outline hover:bg-red-600 hover:text-red-100"
          type="button"
          onClick={() => setOffSet(offSet - limit)}
        >
          Previous
        </button>
        <button
          className="bg-red-500 text-white active:bg-red-800 font-bold uppercase text-xs px-4 py-2 rounded-full shadow focus:shadow-outline hover:bg-red-600 hover:text-red-100"
          type="button"
          disabled={!data.next}
          onClick={() => setOffSet(offSet + limit)}
        >
          Next
        </button>
      </div>
    )
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=${limit}`)
      .then((res) => {
        setDataState({ next: res.data.next, previous: res.data.previous })
      })
  }, [offSet])

  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-4xl mb-2 leading-tight font-semibold font-heading">Pokemon Pokedex</h2>
      <p className="max-w-xl mx-auto mb-12 text-gray-400">Pokedex on React + Tailwind CSS</p>
      <PokeFetch pageUrl={`https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=${limit}`} />
      {Pages(dataState)}
    </section>
  )
}


export default App
