import React from 'react'

export default function HomeCarousel({ image, heading, heading2, imageAlt }) {
  return (
    <div className="banner-image">
      <h1 className="heading1">{heading}</h1>
      {heading2 && <h1 className="heading2">{heading2}</h1>}
      <img
        className="d-block w-100"
        src={image}
        alt={imageAlt}
      />
    </div>
  )
}