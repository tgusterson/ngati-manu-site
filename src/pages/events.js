import React from "react"
import { graphql } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/eventCard"
import BannerImage from "../components/bannerImage"

import Banner from '../../content/assets/index/cards/events.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu Events" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Upcoming Events"} image={Banner} imageAlt={"Fantail bird photograph banner"} />
            <div className="cta-home" />
          </Container>
        </Row>
      </Container>

      {data.allContentfulEvent.edges.map((event, index) => {
        let left = index % 2 !== 0 ? false : true;
        let right = index % 2 !== 0 ? true : false;
        return (
          <Event
            left={left}
            right={right}
            image={event.node.image.file.url}
            date={event.node.date}
            alt={event.node.eventName}
            heading={event.node.eventName}
            frequency={event.node.frequency}
            key={index}
          />
        )
      })}

    </Layout>
  )
}

export default Events

export const pageQuery = graphql`
  query {
            site {
            siteMetadata {
            title
          }
    }
    allContentfulEvent(sort: {fields: createdAt, order: ASC}) {
      edges {
        node {
          eventName
          date
          frequency
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`