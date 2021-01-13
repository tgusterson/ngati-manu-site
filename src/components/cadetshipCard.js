import React from 'react'
import ReactMarkdown from "react-markdown";
import Image from 'react-bootstrap/Image'

export default function cadetshipCard({ left, right, image, name, body }) {
  return (
    <>
      {
        left && <div className="cadetshipCard-container-left">
          <div className="cadetshipCard-image">
            <Image src={image} alt={name} />
          </div>
          <div className="cadetshipCard-text-left">
            <div>
              <ReactMarkdown source={body} />
            </div>
          </div>
        </div>
      }
      {
        right && <div className="cadetshipCard-container-right">
          <div className="cadetshipCard-text-right">
            <div>
              <ReactMarkdown source={body} />
            </div>
          </div>
          <div className="cadetshipCard-image">
            <Image src={image} alt={name} />
          </div>
        </div>
      }
    </>
  )
}