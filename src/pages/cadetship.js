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
          <Container className="markdown-content-container markdown-content-container-tohu">
            <Row>
              <Col xs={12} style={{ textAlign: 'center' }}>
                <Image src={data.allContentfulCadetship.edges[0].node.missionStatement.file.url} fluid alt={data.allContentfulCadetship.edges[0].node.missionStatementTitle} />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col md={8}>
                <Image src={data.allContentfulCadetship.edges[0].node.koraImage.file.url} fluid alt={data.allContentfulCadetship.edges[0].node.koraImageTitle} />
              </Col>
              <Col md={4}>
                <div>
                  <ReactMarkdown source={data.allContentfulCadetship.edges[0].node.kora.kora} />
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col md={8}>
                <Image src={data.allContentfulCadetship.edges[0].node.pakaiahiImage.file.url} fluid alt={data.allContentfulCadetship.edges[0].node.pakaiahiImageTitle} />
              </Col>
              <Col md={4}>
                <div>
                  <ReactMarkdown source={data.allContentfulCadetship.edges[0].node.pakaiahi.pakaiahi} />
                </div>
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
    allContentfulCadetship(filter: {contentful_id: {eq: "49Z4rp1lytBIEnzy4z2GJk"}}) {
      edges {
        node {
          kora {
            kora
          }
          pakaiahi {
            pakaiahi
          }
          koraImage {
            file {
              url
            }
          }
          pakaiahiImage {
            file {
              url
            }
          }
          missionStatement {
            file {
              url
            }
          }
          koraImageTitle
          pakaiahiImageTitle
        }
      }
    }
  }
`
