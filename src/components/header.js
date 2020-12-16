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
        <Link className="navbar-brand" to="/">
          <Image src={NgatiManuLogo} />
          <span className="navbar-brand-text">Ngāti Manu</span>
        </Link>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ml-auto" as="ul">
            <NavDropdown title="Tahuhu" id="basic-nav-dropdown">
              <NavDropdown.Item as="li">
                <Link to="/tahuhu/" className="nav-link">Introduction to Tahuhu</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link to="/tahuhu-representatives/" className="nav-link">Tāhuhu Representatives</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link to="/tahuhu-representatives-specifications/" className="nav-link">Tāhuhu Rep Ideal Specifications</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link to="/tahuhu-strategy/" className="nav-link">Tahuhu Strategy</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link to="/tahuhu-voting/" className="nav-link">Voting &amp; Election Process</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Our Korero" id="basic-nav-dropdown">
              <NavDropdown.Item as="li">
                <Link to="/korero-principles/" className="nav-link">Guiding Principles &amp; Values</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link to="/korero-history/" className="nav-link">History of Ngāti Manu</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link to="/korero-pepeha/" className="nav-link">Pepeha</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link to="/korero-waiata/" className="nav-link">Waiata</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link to="/korero-tohu/" className="nav-link">Ngāti Manu Tohu</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Our Marae" id="basic-nav-dropdown">
              <NavDropdown.Item as="li">
                <Link to="/marae-history/" className="nav-link">History of Marae</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link to="/marae-komiti/" className="nav-link">Karetu Marae Komiti</Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item as="li">
                <Link to="/page-2" className="nav-link">Marae Layout</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link to="/page-2" className="nav-link">Marae Tikanga</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link to="/page-2" className="nav-link">Booking Calendar</Link>
              </NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Our People" id="basic-nav-dropdown">
              <NavDropdown.Item as="li">
                <Link to="/biodiversity/" className="nav-link">Pokai o Ngāti Manu</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link to="/cadetship/" className="nav-link">Kaitiaki o te ahi</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link to="/events/" className="nav-link">Events</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link to="/contacts/" className="nav-link">Contacts</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ngāti Manu Registration" id="basic-nav-dropdown">
              <NavDropdown.Item as="li">
                <Link to="/registration/" className="nav-link">Sign Up</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link to="/page-2" className="nav-link">Admin Portal</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}