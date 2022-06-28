import React from 'react'

const ImageInfo = ({url}) => {
  return (
    <img
    src={`${url}`}
    className='my-4 rounded-md'
    />
  )
}

export default ImageInfo