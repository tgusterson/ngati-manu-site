import React from 'react'

import Image from 'react-bootstrap/Image'

export default function event({ image, imageAlt }) {
  return (
    <div className="event">
      <Image src={image} alt={imageAlt} fluid />
    </div>
  )
}