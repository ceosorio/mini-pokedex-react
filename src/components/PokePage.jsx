/* eslint-disable react/prop-types */
import React from 'react'
import '../assets/styles/tailwind.css'
import PokeInfo from './PokeInfo'

export default function PokePage(props) {
  const { pokeArray } = props
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="inline-block -mx-1 lg:-mx-4">
        {
          pokeArray.map((poke) => (
            <PokeInfo key={poke.id} poke={poke} />
          ))
        }
      </div>
    </div>
  )
}
