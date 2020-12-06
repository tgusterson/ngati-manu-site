import React from "react";
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import Forest from '../../content/assets/banner-images/korero_history.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu History" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Ngāti Manu History"} heading2={"Te Timatanga o Ngāti Manu"} image={Forest} imageAlt={"Ngāti Manu Registration"} />
            <div className="cta-home">
              <div className="cta-content" style={{ fontFamily: 'caveat' }}>
                E aku iti, e aku rahi <br />
                E aku whakatamarahi ki te rangi <br />
                Nau mai, haere mai, rēhita mai <br />
              </div>
            </div>
          </Container>
          <Container className="markdown-content-container">
            <ReactMarkdown source={data.allContentfulBasicPage.edges[0].node.body.body} />
          </Container>
        </Row>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Link className="btn btn-info m-4" to="/">Registration Form</Link>
          </Col>
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
    allContentfulBasicPage(filter: {contentful_id: {eq: "4GrF618Uhgi8ejt6li85lH"}}) {
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
