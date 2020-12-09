import React from "react"
import { graphql } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"
import ReactMarkdown from "react-markdown";
import Weave from '../../content/assets/banner-images/tahuhu_election.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Tāhuhu Election and Voting Process" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Tāhuhu Election & Voting Process"} image={Weave} imageAlt={"Tāhuhu Election & Voting Process banner"} />
            <div className="cta-home" />
          </Container>
          <Container className="markdown-content-container">
            <ReactMarkdown source={data.allContentfulBasicPage.edges[0].node.body.body} />
          </Container>
          <Container>
            <p>If you are interested in supporting our Tāhuhu Representatives or upcoming Tāhuhu events please <a href="mailto:tahuhunui@gmail.com">tahuhunui@gmail.com</a> for more information.</p>
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
    allContentfulBasicPage(filter: {contentful_id: {eq: "44So7Y0hYkcWcBvifnV7JY"}}) {
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
