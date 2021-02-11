import React from "react";
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import BannerImg from '../../content/assets/banner-images/korero_whakapapa.png'

const KoreroWhakapapa = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu whakapapa to Ngāti Tu" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Ngāti Manu whakapapa to Ngāti Tu"} image={BannerImg} imageAlt={"NZ ferns"} />
            <div className="cta-home" />
          </Container>
        </Row>
        <Container className="markdown-content-container markdown-content-container-treaty markdown-content-container-whakapapa">
          <ReactMarkdown source={data.allContentfulBasicPage.edges[0].node.body.body} />
        </Container>
      </Container>
    </Layout>
  )
}

export default KoreroWhakapapa

export const pageQuery = graphql`
  query {
            site {
            siteMetadata {
            title
          }
    }
    allContentfulBasicPage(filter: {contentful_id: {eq: "6avTim8dWAmP1oe2a6AV4f"}}) {
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
