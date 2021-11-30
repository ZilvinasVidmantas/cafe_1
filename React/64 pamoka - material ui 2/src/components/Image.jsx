import React from 'react'

const Image = ({ alt, width, height, objectFit, objectPosition, style, ...props }) => {

  return (
    <img
      alt={alt ?? 'None'}
      style={{
        width: width ?? 50,
        height: height ?? 50,
        objectFit: objectFit ?? 'cover',
        objectPosition: objectPosition ?? 'center',
        ...style
      }}
      {...props}
    />
  )
}

export default Image
