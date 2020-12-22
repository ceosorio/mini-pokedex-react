/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react'
import PokeStats from './PokeStats'

export default function PokeModal(props) {
  const { onCancel, poke } = props
  useEffect(() => {})

  return (
    <div>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* header */}
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-3xl font-semibold">
                Base Stats
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-red opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onCancel}
              >
                <svg className="h-8 w-8 text-red-500 transition duration-400 ease-in-out hover:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {' '}
                  <circle cx="12" cy="12" r="10" />
                  {' '}
                  <line x1="15" y1="9" x2="9" y2="15" />
                  {' '}
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </button>
            </div>
            {/* body */}
            <div className="relative p-6 flex-auto">
              Here are the Base Stats for
              {' '}
              {poke.name}
              <PokeStats stats={poke.stats} />
              {`With a height of ${poke.height * 10}cm and weight of ${poke.weight / 10}kgs`}
              <div className="px-6 py-4">
                {
                    poke.types.map((type) => (
                      <span key={type.type.name} className={`inline-block bg-${type.type.name} rounded-lg px-3 py-1 text-sm font-semibold text-gray-200 mr-2`}>
                        {type.type.name.toUpperCase()}
                        {' '}
                      </span>
                    ))
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </div>
  )
}
