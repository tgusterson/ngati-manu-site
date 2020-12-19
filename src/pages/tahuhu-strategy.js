import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import Waterfall from '../../content/assets/banner-images/tahuhu_strategy.png'

const Strategy = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Tāhuhu Mandate Strategy" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Tāhuhu Mandate Strategy"} image={Waterfall} imageAlt={"Tāhuhu Mandate Strategy banner"} />
            <div className="cta-home" />
            <Container className="markdown-content-container">
              <ReactMarkdown source={data.allContentfulBasicPage.edges[0].node.body.body} />
            </Container>
            <Container>
              <p>If you are interested in supporting our Tāhuhu Representatives or upcoming Tāhuhu events please email <a href={"mailto:" + data.allContentfulTahuhuRepresentativesContact.edges[0].node.contactEmail}>tahuhunui@gmail.com</a> for more information.</p>
            </Container>
          </Container>
        </Row>
      </Container>
    </Layout>
  )
}

export default Strategy

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
    allContentfulTahuhuRepresentativesContact(filter: {contentful_id: {eq: "40LpouKuGJRdYKV1374Htc"}}) {
      edges {
        node {
          contactEmail
        }
      }
    }
  }
`
