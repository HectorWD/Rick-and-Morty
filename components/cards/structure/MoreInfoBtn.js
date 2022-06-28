import React from 'react'
import Link from 'next/link'

const MoreInfoBtn = ({info}) => {
  return (
    <Link href={`/moreInfo/${info.id}`} info={info}>
    <button 
    className='absolute p-1 bg-white rounded-lg top-1 right-1'
    >More info..</button>
    </Link>
    
  )
}

export default MoreInfoBtn