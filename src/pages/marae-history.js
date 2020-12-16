import React from "react";
import ReactMarkdown from "react-markdown";
import { graphql } from "gatsby"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import Banner from '../../content/assets/banner-images/marae_history.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu Marae History" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Ngāti Manu Marae History"} image={Banner} imageAlt={"Ngāti Manu Marae"} />
            <div className="cta-home" />
          </Container>
        </Row>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <Row style={{ padding: '0 12px', marginTop: '1rem' }}>
              <Col xs={12} style={{ fontSize: '1.1rem', padding: '15px' }}>
                <ReactMarkdown source={data.allContentfulMaraeHistoryPage.edges[0].node.introParagraph.introParagraph} />
              </Col>
            </Row>
            <Row style={{ padding: '0 12px' }}>
              <Col xs={{ order: 'last' }} md={{ order: 'first' }}>
                <Image src={data.allContentfulMaraeHistoryPage.edges[0].node.imageOne.file.url} style={{ width: '100%' }} />
              </Col>
              <Col xs={12} md={6} style={{ fontSize: '1.1rem', padding: '15px' }}>
                <ReactMarkdown source={data.allContentfulMaraeHistoryPage.edges[0].node.paragraphOne.paragraphOne} />
              </Col>
            </Row>
            <Row style={{ padding: '0 12px' }}>
              <Col xs={12} md={6} style={{ fontSize: '1.1rem', padding: '15px' }}>
                <ReactMarkdown source={data.allContentfulMaraeHistoryPage.edges[0].node.paragraphTwo.paragraphTwo} />
              </Col>
              <Col xs={12} md={6}>
                <Image src={data.allContentfulMaraeHistoryPage.edges[0].node.imageTwo.file.url} style={{ width: '100%' }} />
              </Col>
            </Row>
            <Row style={{ padding: '0 12px 8px' }}>
              <Col xs={{ order: 'last' }} md={{ order: 'first' }}>
                <Image src={data.allContentfulMaraeHistoryPage.edges[0].node.imageThree.file.url} style={{ width: '100%' }} />
              </Col>
              <Col xs={12} md={6} style={{ fontSize: '1.1rem', padding: '15px' }}>
                <ReactMarkdown source={data.allContentfulMaraeHistoryPage.edges[0].node.paragraphThree.paragraphThree} />
              </Col>
            </Row>
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
    allContentfulMaraeHistoryPage(filter: {contentful_id: {eq: "1KAZeUEpvKyXcWMhgS08HU"}})  {
      edges {
        node {
          imageOne {
            file {
              url
            }
          }
          imageTwo {
            file {
              url
            }
          }
          imageThree {
            file {
              url
            }
          }
          introParagraph {
            introParagraph
          }
          paragraphOne {
            paragraphOne
          }
          paragraphTwo {
            paragraphTwo
          }
          paragraphThree {
            paragraphThree
          }
        }
      }
    }
  }
`
