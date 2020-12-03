import React from 'react'
import { Link } from 'gatsby'

export default function CallToAction() {
  return (
    <div className="cta-home">
      <div>
        <div><span>Calling all Ngāti Manu whanau! </span><br />Register to have your say and become involved in our Iwi activities</div>
        <Link className="btn btn-outline-light" to="/registration/">Register</Link>
      </div>
    </div>
  )
}