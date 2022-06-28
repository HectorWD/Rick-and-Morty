import React from 'react'

const InfoCard = ({name,location,origin}) => {
  return (
    <section className='flex flex-col justify-center items-start bg-gray-700 text-white w-full px-2 text-xl rounded-b-lg'>
        <h3>Name: {name}</h3>
        <span>Location: {location}</span>
        <span>Origin: {origin}</span>
    </section>
  )
}

export default InfoCard