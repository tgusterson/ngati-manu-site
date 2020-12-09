import React from 'react'
import ReactMarkdown from "react-markdown";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function waiataCard({ image, lyrics, alt, audioSRC }) {
  return (
    <div className="waiata-card">
      <div>
        <img alt={alt} src={image} />
      </div>
      <div>
        <ReactMarkdown source={lyrics} />
        {audioSRC && <audio src={audioSRC} controls />}
      </div>
    </div>
  )
}

