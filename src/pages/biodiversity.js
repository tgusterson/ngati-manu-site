import React from "react";
import ReactMarkdown from "react-markdown";
import { graphql } from "gatsby"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Image from 'react-bootstrap/Image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import Banner from '../../content/assets/banner-images/people_biodiversity.png'

const BiodiversityPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu Biodiversity" />
      <Container fluid>
        <Row style={{ marginBottom: '1rem' }}>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Pokai o Ngāti Manu"} image={Banner} imageAlt={"Ngāti Manu Biodiversity Banner Image"} />
            <div className="cta-home">
              <div className="cta-content" style={{ fontFamily: 'Caveat', fontSize: '1.2rem', padding: '1.4rem' }}>
                <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[2].node.introText.introText} />
              </div>
            </div>
          </Container>
        </Row>
        <Row className="biodiversity-tabs-container">
          <Tabs defaultActiveKey="bio" id="biodiversity-tabs" style={{ width: '100%' }}>
            <Tab eventKey="bio" title="Biodiversity Management">
              <Row style={{ padding: '0 12px' }}>
                <Col xs={{ order: 'last' }} md={{ order: 'first' }} style={{ padding: '15px' }}>
                  <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[1].node.textFieldOne.textFieldOne} />
                </Col>
                <Col xs={12} md={6}>
                  <Image src={data.allContentfulBiodiversityPage.edges[2].node.imageOne.file.url} fluid />
                </Col>
              </Row>
              <hr />
              <Row style={{ padding: '0 12px' }}>
                <Col xs={12} md={6}>
                  <Image src={data.allContentfulBiodiversityPage.edges[2].node.imageTwo.file.url} fluid />
                </Col>
                <Col xs={12} md={6} style={{ padding: '15px' }}>
                  <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[2].node.textFieldTwo.textFieldTwo} />
                </Col>
              </Row>
              <hr />
              <Row style={{ padding: '0 12px 8px' }}>
                <Col xs={{ order: 'last' }} md={{ order: 'first' }} style={{ padding: '15px' }}>
                  <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[2].node.textFieldThree.textFieldThree} />
                </Col>
                <Col xs={12} md={6}>
                  <Image src={data.allContentfulBiodiversityPage.edges[2].node.imageThree.file.url} fluid />
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="herenga" title="Herenga">
              <Row style={{ padding: '0 12px' }}>
                <Col xs={{ order: 'last' }} md={{ order: 'first' }} style={{ padding: '15px' }}>
                  <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[1].node.textFieldOne.textFieldOne} />
                </Col>
                <Col xs={12} md={6}>
                  <Image src={data.allContentfulBiodiversityPage.edges[1].node.imageOne.file.url} fluid />
                </Col>
              </Row>
              <hr />
              <Row style={{ padding: '0 12px' }}>
                <Col xs={12} md={6}>
                  <Image src={data.allContentfulBiodiversityPage.edges[1].node.imageTwo.file.url} fluid />
                </Col>
                <Col xs={12} md={6} style={{ padding: '15px' }}>
                  <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[1].node.textFieldTwo.textFieldTwo} />
                </Col>
              </Row>
              <hr />
              <Row style={{ padding: '0 12px 8px' }}>
                <Col xs={{ order: 'last' }} md={{ order: 'first' }} style={{ padding: '15px' }}>
                  <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[1].node.textFieldThree.textFieldThree} />
                </Col>
                <Col xs={12} md={6}>
                  <Image src={data.allContentfulBiodiversityPage.edges[1].node.imageThree.file.url} fluid />
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="paetae" title="Ā matou whāinga paetae">
              <Container style={{ marginTop: '1rem' }}>
                <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[0].node.introText.introText} />
              </Container>
              <Row style={{ padding: '0 12px' }}>
                <Col xs={{ order: 'last' }} md={{ order: 'first' }} style={{ padding: '15px' }}>
                  <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[0].node.textFieldOne.textFieldOne} />
                </Col>
                <Col xs={12} md={6}>
                  <Image src={data.allContentfulBiodiversityPage.edges[0].node.imageOne.file.url} fluid />
                </Col>
              </Row>
              <hr />
              <Row style={{ padding: '0 12px' }}>
                <Col xs={12} md={6}>
                  <Image src={data.allContentfulBiodiversityPage.edges[0].node.imageTwo.file.url} fluid />
                </Col>
                <Col xs={12} md={6} style={{ padding: '15px' }}>
                  <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[0].node.textFieldTwo.textFieldTwo} />
                </Col>
              </Row>
              <hr />
              <Row style={{ padding: '0 12px 8px' }}>
                <Col xs={{ order: 'last' }} md={{ order: 'first' }} style={{ padding: '15px' }}>
                  <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[0].node.textFieldThree.textFieldThree} />
                </Col>
                <Col xs={12} md={6}>
                  <Image src={data.allContentfulBiodiversityPage.edges[0].node.imageThree.file.url} fluid />
                </Col>
              </Row>
            </Tab>
          </Tabs>

        </Row>
      </Container>
    </Layout>
  )
}

export default BiodiversityPage

export const pageQuery = graphql`
  query {
          site {
          siteMetadata {
          title
        }
    }
    allContentfulBiodiversityPage(sort: {fields: createdAt, order: DESC}) {
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
          textFieldOne {
            textFieldOne
          }
          textFieldTwo {
            textFieldTwo
          }
          textFieldThree {
            textFieldThree
          }
          introText {
            introText
          }
        }
      }
    }
  }
`
