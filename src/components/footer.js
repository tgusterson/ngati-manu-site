import React from 'react'

import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';

export default function footer({ left, right, image }) {
  return (
    <div className="footer-container">
      <div className="footer-top"></div>
      <div className="footer-content">
        <div className="footer-info">
          <h5>Helpful links</h5>
          <ul className="footer-info-link">
            <li>Contact</li>
            <li>Privacy policy</li>
            <li>Terms and conditions </li>
          </ul>
        </div>
        <div className="footer-social">
          <h5>Connect with us</h5>
          <div className="footer-social-icons">
            <AiFillFacebook className="footer-social-icons-icon" />
            <AiFillTwitterSquare className="footer-social-icons-icon" />
          </div>
        </div>
      </div>
      <span style={{ textAlign: 'center', backgroundColor: '#EEE' }}>© {new Date().getFullYear()}, Created by <a href="https://www.thomgusterson.dev" target="_blank" rel="noreferrer">Thom Gusterson</a></span>
    </div>
  )
}

