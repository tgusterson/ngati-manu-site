import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

import Marae from '../../content/assets/index/carousel/marae.png'
import History from '../../content/assets/index/carousel/history.png'
import Registration from '../../content/assets/index/carousel/registration.png'

export default function HomeCarousel() {
  return (
    <Carousel className="d-block carousel-custom">
      <Carousel.Item interval={3000} className="carousel-item-custom">
        <img
          className="d-block w-100"
          src={Registration}
          alt="Ngati Manu Registration slide"
        />
        <Carousel.Caption>
          <h3>Ngāti Manu Registration</h3>
          <Button variant="outline-light">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} className="carousel-item-custom">
        <img
          className="d-block w-100"
          src={History}
          alt="Ngati Manu History slide"
        />
        <Carousel.Caption>
          <h3>Ngāti Manu History</h3>
          <Button variant="outline-light">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} className="carousel-item-custom">
        <img
          className="d-block w-100"
          src={Marae}
          alt="Ngati Manu Marae slide"
        />
        <Carousel.Caption>
          <h3>Ngāti Manu Marae</h3>
          <Button variant="outline-light">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}