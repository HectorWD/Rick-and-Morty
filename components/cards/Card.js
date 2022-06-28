import React from 'react'
import ImageCard from './structure/ImageCard'
import InfoCard from './structure/InfoCard'
import MoreInfoBtn from './structure/MoreInfoBtn'

const Card = ({ characterInfo }) => {
    return (
        <section 
        className='relative flex flex-col items-center justify-center w-4/5 max-w-sm p-2 m-4 border-gray-700 rounded-lg min-w-fit bg-slate-400' >
            <ImageCard url={characterInfo.image} />
            <InfoCard name={characterInfo.name} location={characterInfo.location.name} origin={characterInfo.origin.name} />
            <MoreInfoBtn info={characterInfo} />
        </section>
    )
}

export default Card