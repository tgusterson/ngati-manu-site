import React from 'react'



export default function HomeCarousel({ image, heading, imageAlt }) {
  return (
    <div className="banner-image">
      <h1>{heading}</h1>
      <img
        className="d-block w-100"
        src={image}
        alt={imageAlt}
      />
    </div>
  )
}