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
          <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23dc3545&amp;ctz=Pacific%2FAuckland&amp;src=aW5mby5uZ2F0aW1hbnVAZ21haWwuY29t&amp;color=%23D50000&amp;showTitle=0" style={{ border: "solid 0px #777", margin: 'auto', width: "100%", minHeight: "800px", frameborder: "0", scrolling: "no" }}></iframe>
        </Row>
      </Container>


      {/* {
        data.allContentfulEvent.edges.map((event, index) => {
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
        })
      } */}

    </Layout >
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