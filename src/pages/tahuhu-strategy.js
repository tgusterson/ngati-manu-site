import React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import Waterfall from '../../content/assets/banner-images/tahuhu_strategy.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Tāhuhu Strategy" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Tāhuhu Strategy"} image={Waterfall} imageAlt={"Tāhuhu Strategy banner"} />
            <Container className="markdown-content-container">
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
    allContentfulBasicPage(filter: {contentful_id: {eq: "7iCKyv6iBBB0TJXXwp9akj"}}) {
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