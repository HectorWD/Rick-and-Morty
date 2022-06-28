import React from 'react'

const ImageCard = ({url}) => {
  return (
    <img 
    src={`${url}`} 
    loading='lazy'
    className='w-full max-w-sm min-w-full bg-cover rounded-t-lg'/>
  )
}

export default ImageCard