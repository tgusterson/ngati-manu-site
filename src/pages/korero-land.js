import React from "react";
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import BannerImg from '../../content/assets/banner-images/korero_land.png'

const KoreroLand = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="He kōrero mō te whenua o Te Kāretu" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"He kōrero mō te whenua o Te Kāretu"} image={BannerImg} imageAlt={"Ngāti Manu artwork"} />
            <div className="cta-home" />
          </Container>
        </Row>
        <Container className="markdown-content-container">
          <ReactMarkdown source={data.allContentfulBasicPage.edges[0].node.body.body} />
        </Container>
      </Container>
    </Layout>
  )
}

export default KoreroLand

export const pageQuery = graphql`
  query {
            site {
            siteMetadata {
            title
          }
    }
    allContentfulBasicPage(filter: {contentful_id: {eq: "4KwxwYAmlpvdoeU5Uapizk"}}) {
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
