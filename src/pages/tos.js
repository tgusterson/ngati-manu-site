import React from "react";
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import Banner from '../../content/assets/banner-images/korero_principles.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu Guiding Principles and Values " />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Ngāti Manu Guiding Principles & Values"} image={Banner} imageAlt={"Ngāti Manu Registration"} />
            <div className="cta-home" />
          </Container>
        </Row>
      </Container>
      <Container className="markdown-content-container">
        <ReactMarkdown source={data.allContentfulBasicPage.edges[0].node.body.body} />
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
    allContentfulBasicPage(filter: {contentful_id: {eq: "6mAWclY7xHlmpMav9NNIyf"}}) {
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
