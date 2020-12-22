/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react'
import PokeModal from './PokeModal'
import '../assets/styles/tailwind.css'

export default function PokeInfo(props) {
  const { poke } = props
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = useCallback(() => {
    setShowModal(!showModal)
  }, [showModal])

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  return (
    <div className="inline-block bg-white p-4 shadow rounded-lg space-x-4" id={poke.id} key={poke.id}>
      <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <img src={poke.sprites.front_default} alt="pokemon" onClick={handleShowModal} />
      </div>
      <h2 className="mt-4 font-bold text-xl capitalize">{poke.name}</h2>
      <h6 className="mt-2 text-sm font-medium">
        Number:
        {' '}
        {poke.id}
      </h6>
      {/* <button className="rounded-md" onClick={handleShowModal}>More Info</button> */}
      {showModal && <PokeModal onCancel={handleCloseModal} poke={poke} />}
    </div>
  )
}
