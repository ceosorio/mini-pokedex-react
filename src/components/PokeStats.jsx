/* eslint-disable react/prop-types */
import React from 'react'
import '../assets/styles/tailwind.css'

export default function PokeStats(props) {
  const { stats } = props
  return (
    <div id="wrapper" className="max-w-xl px-4 py-4 mx-auto">
      <div className="sm:grid sm:h-25 sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.stat.name} className="flex flex-col justify-center px-1 py-1 bg-white border border-gray-300 rounded">
            <p className="text-3xl font-semibold text-center text-gray-800">{stat.base_stat}</p>
            <p className="text-lg text-center text-gray-500">{stat.stat.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
