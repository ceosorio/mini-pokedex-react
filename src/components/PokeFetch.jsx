/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokePage from './PokePage'

export default function PokeFetch(props) {
  const { pageUrl } = props
  const [pokes, setPokes] = useState([])
  const [load, setLoad] = useState('true')


  useEffect(() => {
    (async () => {
      await axios
        .get(pageUrl)
        .then((res) => res.data.results)
        .then((results) => Promise.all(results.map((res) => axios.get(res.url))))
        .then((results) => {
          setPokes(results.map((res) => res.data))
        })
    })()
  }, [pageUrl])


  setTimeout(() => {
    setLoad(false)
  }, 1000)


  return (
    <div className="text-center">
      {load ? <p>Loading...</p> : (
        <PokePage pokeArray={pokes} />
      )}
    </div>
  )
}
