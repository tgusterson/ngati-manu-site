import React from 'react'
import { Link } from 'gatsby'
import Button from 'react-bootstrap/Button'

export default function CallToAction() {
  return (
    <div className="cta-home">
      <div>
        <div><span>Calling all Ngāti Manu whanau! </span><br />Register to have your say and become involved in our Iwi activities</div>
        <Button variant="outline-light">Register</Button>
      </div>
    </div>
  )
}