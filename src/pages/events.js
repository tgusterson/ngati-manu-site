import React from "react"
import { Link, graphql } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/event"

import TeTaOPomare from '../../content/assets/events/te_ta_o_pomare.png'
import GirlsWar from '../../content/assets/events/girls_war.png'
import Otuihu from '../../content/assets/events/otuihu.png'
import Whakaputanga from '../../content/assets/events/whakaputanga.png'
import Matariki from '../../content/assets/events/matariki.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu Events" />
      <Container fluid>
        <Row>
          <h1>Upcoming Events</h1>
        </Row>
        <Row>
          <Col xs={6}>
            <Event image={TeTaOPomare} />
          </Col>
          <Col xs={6}>
            <Event image={GirlsWar} /></Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Event image={Otuihu} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Event image={Whakaputanga} />
          </Col>
          <Col xs={12}>
            <Event image={Matariki} />
          </Col>
        </Row>
      </Container>
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
  }
`
