import React from 'react'

export default function eventCard({ left, right, image, heading, date, frequency }) {
  return (
    <>
      {
        left && <div className="eventCard-container-left">
          <div className="eventCard-image">
            <img src={image} alt={heading} />
          </div>
          <div className="eventCard-text-left">
            <div>
              <h4>{heading}</h4>
              <p><b>Date: </b>{date}</p>
              <p><i>{frequency}</i></p>
            </div>
          </div>
        </div>
      }
      {
        right && <div className="eventCard-container-right">
          <div className="eventCard-text-right">
            <div>
              <h4>{heading}</h4>
              <p><b>Date: </b>{date}</p>
              <p><i>{frequency}</i></p>
            </div>
          </div>
          <div className="eventCard-image">
            <img src={image} alt={heading} />
          </div>
        </div>
      }
    </>
  )
}

