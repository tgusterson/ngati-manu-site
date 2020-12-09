import React from "react"
import { Link, graphql } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/eventCard"
import BannerImage from "../components/bannerImage"

import Banner from '../../content/assets/events/te_ta_o_pomare.png'
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
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Upcoming Events"} image={Banner} imageAlt={"Fantail bird photograph banner"} />
            <div className="cta-home" />
          </Container>
        </Row>
      </Container>
      <Container>
        <Event></Event>
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
