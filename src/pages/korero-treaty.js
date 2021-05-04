import React from "react";
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import BannerImg from '../../content/assets/banner-images/korero_treaty.png'

const KoreroHistory = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="He Whakaputanga me Te Tiriti " />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"He Whakaputanga me Te Tiriti "} image={BannerImg} imageAlt={"Treaty image"} />
            <div className="cta-home" />
          </Container>
        </Row>
        <Container className="markdown-content-container markdown-content-container-treaty">
          <ReactMarkdown source={data.allContentfulBasicPage.edges[0].node.body.body} />
        </Container>
      </Container>
    </Layout>
  )
}

export default KoreroHistory

export const pageQuery = graphql`
  query {
            site {
            siteMetadata {
            title
          }
    }
    allContentfulBasicPage(filter: {contentful_id: {eq: "Bv5n4B40Gca3yJlpR0Nyh"}}) {
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
