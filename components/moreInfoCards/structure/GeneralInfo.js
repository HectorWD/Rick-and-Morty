import React from 'react'

const GeneralInfo = ({name, created, location, status, specie, gender}) => {
    return (
            <ul className=''>
                <li>Name: {name}</li>
                <li>Created: {created}</li>
                <li>Location: {location}</li>
                <li>Status: {status}</li>
                <li>Specie: {specie}</li>
                <li>Gender: {gender}</li>
            </ul>
    )
}

export default GeneralInfo