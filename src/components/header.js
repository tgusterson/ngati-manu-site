import React from 'react'

import { Link } from 'gatsby'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import NgatiManuLogo from '../../content/assets/main/ngati-manu_logo.png'

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={NgatiManuLogo} rounded fluid />
          <span className="navbar-brand-text">Ngāti Manu</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ml-auto" as="ul">
            <NavDropdown title="Tahuhu" id="basic-nav-dropdown">
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Introduction to Tahuhu</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Tāhuhu Representatives</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Tāhuhu Rep ideal specifications</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Strategy</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Voting &amp; Election Process</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Our Korero" id="basic-nav-dropdown">
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Guiding Principles &amp; Values</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">History of Ngāti Manu</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Pepeha</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Waiata</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Our Marae" id="basic-nav-dropdown">
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">History of Marae</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Marae Layout</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Marae Tikanga</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Karetu Marae Komiti</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Booking Calendar</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Our People" id="basic-nav-dropdown">
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Pokai o Ngāti Manu</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Kaitiaki o te ahi</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Events</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ngāti Manu Registration" id="basic-nav-dropdown">
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Registration Form</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" href="#action/3.1">
                <Link to="/page-2" className="nav-link">Admin Portal</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}