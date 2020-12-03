import React from 'react'
import { Link } from 'gatsby'

import Button from 'react-bootstrap/Button'

export default function homeCard({ left, right, image, heading, subheading, body, location }) {
  return (
    <>
      {
        left && <div className="homeCard-container-left">
          <div className="homeCard-image">
            <img src={image} alt="" />
          </div>
          <div className="homeCard-text-left">
            <div>
              <h4>{heading}</h4>
              <h6>{subheading}</h6>
              <p>{body}</p>
              <Link className="btn btn-info" to={location}>Read More</Link>
            </div>
          </div>
        </div>
      }
      {
        right && <div className="homeCard-container-right">
          <div className="homeCard-text-right">
            <div>
              <h4>{heading}</h4>
              <h6>{subheading}</h6>
              <p>{body}</p>
              <Link className="btn btn-info" to={location}>Read More</Link>
            </div>
          </div>
          <div className="homeCard-image">
            <img src={image} alt="" />
          </div>
        </div>
      }
    </>
  )
}

