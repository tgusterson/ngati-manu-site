import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import Sky from '../../content/assets/banner-images/tahuhu_specifications.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Tāhuhu Representatives Ideal Specifications" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Tāhuhu Representatives Ideal Specifications"} image={Sky} imageAlt={"Tāhuhu Representatives Ideal Specifications banner"} />
            <Container style={{ padding: '20px' }}>
              <ReactMarkdown source={data.allContentfulBasicPage.edges[0].node.body.body} />
            </Container>
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
    allContentfulBasicPage(filter: {contentful_id: {eq: "2QO4QSrd56mxCh2YPWPNCd"}}) {
      edges {
        node {
          body {
            body
          }
        }
      }
    }
  }
`
