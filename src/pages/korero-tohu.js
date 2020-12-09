import React from "react";
import { graphql } from "gatsby"
import Container from 'react-bootstrap/Container'
import ReactMarkdown from "react-markdown";
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import Banner from '../../content/assets/banner-images/korero_waiata.png'

const Tohu = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu Tohu" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Ngāti Manu Tohu"} image={Banner} imageAlt={"Fantail bird photograph banner"} />
            <div className="cta-home" />
          </Container>
        </Row>
      </Container>
      <Container className="markdown-content-container markdown-content-container-tohu">
        <ReactMarkdown source={data.allContentfulBasicPage.edges[0].node.body.body} />
      </Container>
    </Layout>
  )
}

export default Tohu

export const pageQuery = graphql`
  query {
            site {
            siteMetadata {
            title
          }
    }
    allContentfulBasicPage(filter: {contentful_id: {eq: "4nydP2cmTTMqA5cROpFdfc"}}) {
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