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

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu Biodiversity" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Pokai o Ngāti Manu"} image={Banner} imageAlt={"Ngāti Manu Registration"} />
            <div className="cta-home">
              <div className="cta-content">
                Nā Ngāti Manu, Mā Ngati Manu, e ai ki a Ngāti Manu ki Te Herenga o Ngāti Manu hei tūāpapa ki te whakawhanake i ngā uri whakatipu, i ngā uri morehu, i ngā e haere mai ana. E ai ki ngā tikanga a Pōkai o Ngāti Manu, kia whai koha ki ngā taonga uriuri o Ranginui rāua ko Papatūānuku ki te urunga o te tangata he kitenga a-ahurea, a-tinana, a-hinengaro otirā āwairua. “Ko au ko te awa, ko te awa ko au” e ai ki a Ngāti Manu ko te oranga awa, he oranga tangata, he hononga anō hoki ki te oranga a Ranginui rāua ko Papatūānuku me ā rāua tamariki, he oranga iwi
              </div>
            </div>
          </Container>
        </Row>
        <Row>
          <Tabs defaultActiveKey="bio" id="uncontrolled-tab-example" style={{ width: '100%' }}>
            <Tab eventKey="bio" title="Biodiversity Management">
              <Row style={{ padding: '0 12px' }}>
                <Col xs={6} style={{ fontSize: '1.1rem', padding: '15px' }}>
                  <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[0].node.textFieldOne.textFieldOne} />
                </Col>
                <Col xs={6}>
                  <Image src={data.allContentfulBiodiversityPage.edges[0].node.imageOne.file.url} fluid />
                </Col>
              </Row>
              <hr />
              <Row style={{ padding: '0 12px' }}>
                <Col xs={6}>
                  <Image src={data.allContentfulBiodiversityPage.edges[0].node.imageTwo.file.url} fluid />
                </Col>
                <Col xs={6} style={{ fontSize: '1.1rem', padding: '15px' }}>
                  <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[0].node.textFieldTwo.textFieldTwo} />
                </Col>
              </Row>
              <hr />
              <Row style={{ padding: '0 12px 8px' }}>
                <Col xs={6} style={{ fontSize: '1.1rem', padding: '15px' }}>
                  <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[0].node.textFieldThree.textFieldThree} />
                </Col>
                <Col xs={6}>
                  <Image src={data.allContentfulBiodiversityPage.edges[0].node.imageThree.file.url} fluid />
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="herenga" title="Herenga">
              <Row style={{ padding: '0 12px' }}>
                <Col xs={6} style={{ fontSize: '1.1rem', padding: '15px' }}>
                  <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[1].node.textFieldOne.textFieldOne} />
                </Col>
                <Col xs={6}>
                  <Image src={data.allContentfulBiodiversityPage.edges[1].node.imageOne.file.url} fluid />
                </Col>
              </Row>
              <hr />
              <Row style={{ padding: '0 12px' }}>
                <Col xs={6}>
                  <Image src={data.allContentfulBiodiversityPage.edges[1].node.imageTwo.file.url} fluid />
                </Col>
                <Col xs={6} style={{ fontSize: '1.1rem', padding: '15px' }}>
                  <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[1].node.textFieldTwo.textFieldTwo} />
                </Col>
              </Row>
              <hr />
              <Row style={{ padding: '0 12px 8px' }}>
                <Col xs={6} style={{ fontSize: '1.1rem', padding: '15px' }}>
                  <ReactMarkdown source={data.allContentfulBiodiversityPage.edges[1].node.textFieldThree.textFieldThree} />
                </Col>
                <Col xs={6}>
                  <Image src={data.allContentfulBiodiversityPage.edges[1].node.imageThree.file.url} fluid />
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="paetae" title="Ā matou whāinga paetae">

            </Tab>
          </Tabs>

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
    allContentfulBiodiversityPage {
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
