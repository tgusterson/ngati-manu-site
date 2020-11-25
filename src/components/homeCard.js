import React from 'react'

import Button from 'react-bootstrap/Button'

export default function homeCard({ left, right, image }) {
  return (
    <>
      {
        left && <div className="homeCard-container-left">
          <div className="homeCard-image">
            <img src={image} alt="" />
          </div>
          <div className="homeCard-text-left">
            <div>
              <h4>Pokai o Ngāti Manu</h4>
              <p>Biodiversity Management</p>
              <Button variant="info">Read More</Button>
            </div>
          </div>
        </div>
      }
      {
        right && <div className="homeCard-container-right">
          <div className="homeCard-text-right">
            <div>
              <h4>Kaitiaki o te Ahi</h4>
              <p>Ngāti Manu Cadetship</p>
              <Button variant="info">Read More</Button>
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

