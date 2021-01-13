import React from 'react'
import ReactMarkdown from "react-markdown";
import Image from 'react-bootstrap/Image'

export default function cadetshipFireCard({ image, alt, text }) {
  return (
    <div className="cadetshipFireCard-container">
      <div className="cadetshipFireCard-image">
        <Image src={image} alt={alt} />
      </div>
      <div className="cadetshipFireCard-text">
        <ReactMarkdown source={text} />
      </div>
    </div>
  )
}