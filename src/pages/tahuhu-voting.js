import React from "react"
import { Link, graphql } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import Weave from '../../content/assets/banner-images/tahuhu_election.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Tāhuhu Election and Voting Process" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Tāhuhu Election & Voting Process"} image={Weave} imageAlt={"Tāhuhu Election & Voting Process banner"} />
          </Container>
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
