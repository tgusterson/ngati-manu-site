import React from 'react'
import ReactMarkdown from "react-markdown";

export default function repCard({ left, right, image, name, body }) {
  return (
    <>
      {
        left && <div className="repCard-container-left">
          <div className="repCard-image">
            <img src={image} alt={name} />
          </div>
          <div className="repCard-text-left">
            <div>
              <ReactMarkdown source={body} />
            </div>
          </div>
        </div>
      }
      {
        right && <div className="repCard-container-right">
          <div className="repCard-text-right">
            <div>
              <ReactMarkdown source={body} />
            </div>
          </div>
          <div className="repCard-image">
            <img src={image} alt={name} />
          </div>
        </div>
      }
    </>
  )
}

