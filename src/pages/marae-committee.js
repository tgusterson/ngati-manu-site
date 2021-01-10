import React from "react";
import ReactMarkdown from "react-markdown";
import { Link, graphql } from "gatsby"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import Banner from '../../content/assets/banner-images/marae_committee.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Kāretu Māori Committee " />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Kāretu Māori Committee"} image={Banner} imageAlt={"Kāretu Māori Committee "} />
            <div className="cta-home" />
          </Container>
        </Row>
      </Container>
      <Container className="markdown-content-container markdown-content-container-committee">
        <ReactMarkdown source={data.allContentfulBasicPage.edges[0].node.body.body} />
        <p>If you are interested in supporting, please <Link to={"/contact/"}>contact us</Link>.</p>
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
    allContentfulBasicPage(filter: {contentful_id: {eq: "5oA3GZUVMfLfxwZeGk2Cnn"}})  {
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
