import React from "react";
import { graphql } from "gatsby"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import Banner from '../../content/assets/banner-images/contact.png'

const ContactPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Ngāti Manu Contact Page" />
            <Container fluid>
                <Row>
                    <Container fluid style={{ padding: 0, margin: 0 }}>
                        <BannerImage heading={"Contact Us"} image={Banner} imageAlt={"Contact Us page banner image"} />
                        <div className="cta-home" />
                    </Container>
                </Row>
                <Row>
                    <Container fluid style={{ padding: '50px', margin: 0 }}>
                        <div className="contact-card-container">
                            {data.allContentfulContactCard.edges.map((card, index) => {
                                return (
                                    <Card style={{ width: '20rem', margin: '0.6rem', minHeight: '275px', backgroundColor: "rgb(245, 245, 245)" }} key={index}>
                                        <Card.Body>
                                            <Card.Title>{card.node.title}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{card.node.subtitle}</Card.Subtitle>
                                            <hr />
                                            <Card.Text>
                                                <b>Contact:</b> {` `} {card.node.contactOne}
                                            </Card.Text>
                                            <Card.Text style={{ marginBottom: '25px' }}>
                                                <b>Email: {` `}</b>
                                                <Card.Link href={"mailto:" + card.node.contactOneEmail}>{card.node.contactOneEmail}</Card.Link>
                                            </Card.Text>
                                            {card.node.contactTwo && <Card.Text>
                                                <b>Contact</b>: {` `} {card.node.contactTwo}
                                            </Card.Text>}
                                            {card.node.contactTwoEmail && <Card.Text>
                                                <b>Email: {` `}</b>
                                                <Card.Link href={"mailto:" + card.node.contactTwoEmail}>{card.node.contactTwoEmail}</Card.Link>
                                            </Card.Text>}
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </div>
                    </Container>
                </Row>
            </Container>
        </Layout>
    )
}

export default ContactPage

export const pageQuery = graphql`
  query {
          site {
          siteMetadata {
          title
        }
    }
    allContentfulContactCard {
        edges {
          node {
            contactOne
            contactOneEmail
            contactTwo
            contactTwoEmail
            title
            subtitle
          }
        }
    }
  }
`
