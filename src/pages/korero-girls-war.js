import React from "react";
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import BannerImg from '../../content/assets/banner-images/korero-girls_war.png'

const KoreroHistory = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="1830's Girls War" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"1830's Girls War"} image={BannerImg} imageAlt={"Seaside village"} />
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
    allContentfulBasicPage(filter: {contentful_id: {eq: "58SXGJFiLj5v3ry9eEJTrU"}}) {
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
