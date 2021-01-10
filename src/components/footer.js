import React from 'react'
import { Link } from 'gatsby'
import { AiFillFacebook } from 'react-icons/ai';

export default function footer({ left, right, image }) {
  return (
    <div className="footer-container">
      <div className="footer-top"></div>
      <div className="footer-content">
        <div className="footer-info">
          <h5>Helpful links</h5>
          <ul className="footer-info-link">
            <Link to="/contact/"><li>Contact Us</li></Link>
            <Link to="/privacy/"><li>Privacy policy</li></Link>
            <Link to="/tos/"><li>Terms and conditions</li></Link>
            <a href="https://www.thomgusterson.dev/" target="_blank" rel="noreferrer" ><li>Website developer </li></a>
          </ul>
        </div>
        <div className="footer-social">
          <h5>Connect with us</h5>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/eaikiangatimanu/" target="_blank" rel="noreferrer" ><AiFillFacebook className="footer-social-icons-icon" /></a>
          </div>
        </div>
      </div>
      {/* <span style={{ textAlign: 'center', backgroundColor: '#EEE' }}>© {new Date().getFullYear()}, Created by <a href="https://www.thomgusterson.dev" target="_blank" rel="noreferrer">Thom Gusterson</a></span> */}
    </div>
  )
}

