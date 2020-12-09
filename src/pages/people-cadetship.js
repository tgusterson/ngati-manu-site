import React from "react";
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import Banner from '../../content/assets/banner-images/people_cadetship.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu Cadetship" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Kaitiaki o te Ahi"} heading2={"Ngāti Manu Cadetship"} image={Banner} imageAlt={"Ngāti Manu Registration"} />
            <div className="cta-home">
              <div className="cta-content">
                <h3 style={{ fontFamily: 'caveat', fontSize: '2rem' }}>
                  “We know that given the  opportunity to regain the knowledge and the practices of our Tūpuna, we can reset the pathways of our young people"
                </h3>
              </div>
            </div>
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
