import React from "react";
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import BannerImg from '../../content/assets/banner-images/korero_war.png'

const KoreroWar = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="The Sacking of Otuihu Pā" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"The Sacking of Otuihu Pā"} image={BannerImg} imageAlt={"The Sacking of Otuihu Pā"} />
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

export default KoreroWar

export const pageQuery = graphql`
  query {
            site {
            siteMetadata {
            title
          }
    }
    allContentfulBasicPage(filter: {contentful_id: {eq: "1XhXep79yTVo4m3OOHkTB4"}}) {
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
