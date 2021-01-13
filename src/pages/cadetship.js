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
import CadetshipCard from "../components/cadetshipCard"
import CadetshipFireSection from "../components/cadetshipFireSection"

import Banner from '../../content/assets/banner-images/people_cadetship.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu Cadetship" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Ngā Kaitiaki o te Ahi"} image={Banner} imageAlt={"Ngāti Manu Cadetship"} />
            <div className="cta-home">
              <div className="cta-content" />
            </div>
          </Container>
          <div className="cadetship-content-container">
            <CadetshipCard left image={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.cardImageLeft.file.url} name={"Mission Statement"} body={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.cardTextOne.cardTextOne} />
            <CadetshipCard right image={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.cardImageRight.file.url} name={"Vision Statement"} body={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.cardTextTwo.cardTextTwo} />
            <hr />
            <CadetshipFireSection
              cardOneText={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.ahikaCardText.ahikaCardText}
              cardTwoText={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.koraCardText.koraCardText}
              cardThreeText={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.pakaiahiCardText.pakaiahiCardText}
              cardOneImage={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.ahikaCardImage.file.url}
              cardTwoImage={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.koraCardImage.file.url}
              cardThreeImage={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.pakaiahiCardImage.file.url}
            />
            <hr />
            <Image
              className="d-block w-100"
              src={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.bigPictureOne.file.url}
              alt={"Programme Framework"}
            />
            <hr />
            <Image
              className="d-block w-100"
              src={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.bigPictureTwo.file.url}
              alt={"Values"}
            />
            <hr />
            <Row>
              <Col md={{ order: 'first' }} xs={{ order: 'last' }}>
                <Image
                  className="mx-auto mb-2 d-block"
                  src={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.guidingWhakataikiImage.file.url}
                  alt={"GUIDING WHAKATAUKĪ"}
                />
              </Col>
              <Col >
                <ReactMarkdown className="cadetship-whakatauki-section-text" source={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.guidingWhakataikiText.guidingWhakataikiText} />
              </Col>
            </Row>
            <hr />
            <Row className={"column-section"}>
              <Col md={6} xs={12}>
                <ReactMarkdown source={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.guidingPrinciplesColumn1.guidingPrinciplesColumn1} />
              </Col>
              <Col md={6}>
                <ReactMarkdown source={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.guidingPrinciplesColumn2.guidingPrinciplesColumn2} />
              </Col>
            </Row>
            <Row>
              <Col md={{ order: 'first' }} className="maori-environmental-principles-image1">
                <Image
                  className="d-block w-100"
                  src={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.environmentalPrinciplesImageOne.file.url}
                  alt={"New Zealand Bush"}
                />
              </Col>
              <Col xs={{ order: 'first' }} md={7}>
                <Image
                  className="d-block w-100"
                  src={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.environmentalPrinciplesImageTwo.file.url}
                  alt={"Environmental Principles"}
                />
              </Col>
            </Row>
            <hr />
            <Image
              className="d-block w-100"
              src={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.bigPictureThree.file.url}
              alt={"Curriculum Focus Area Diagram"}
            />
            <hr />
            <div className="graduate-section-container">
              <h5>NGĀ KORA GRADUATE PROGRAM</h5>
              <Row>
                <Col md={5} xs={{ order: 'last' }}>
                  <Image
                    className="d-block w-100"
                    src={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.graduateProgramImage.file.url}
                    alt={"Graduate Programme"}
                  />
                </Col>
                <Col md={7}>
                  <ReactMarkdown className="cadetship-whakatauki-section-text" source={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.graduateProgramText.graduateProgramText} />
                </Col>
              </Row>
              <br />
              <Image
                className="d-block w-100"
                src={data.allContentfulNgaKaitiakiOTeAhiPage.edges[0].node.bigPictureFour.file.url}
                alt={"Graduate Attributes Diagram"}
              />
            </div>
          </div>
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
    allContentfulNgaKaitiakiOTeAhiPage(filter: {contentful_id: {eq: "7bhM807ew4RlGJgAHP3Vba"}}) {
      edges {
        node {
          ahikaCardImage {
            file {
              url
            }
          }
          bigPictureOne {
            file {
              url
            }
          }
          bigPictureTwo {
            file {
              url
            }
          }
          bigPictureThree {
            file {
              url
            }
          }
          bigPictureFour {
            file {
              url
            }
          }
          cardImageLeft {
            file {
              url
            }
          }
          cardImageRight {
            file {
              url
            }
          }
          cardTextOne {
            cardTextOne
          }
          cardTextTwo {
            cardTextTwo
          }
          environmentalPrinciplesImageOne {
            file {
              url
            }
          }
          environmentalPrinciplesImageTwo {
            file {
              url
            }
          }
          graduateProgramImage {
            file {
              url
            }
          }
          graduateProgramText {
            graduateProgramText
          }
          guidingPrinciplesColumn1 {
            guidingPrinciplesColumn1
          }
          guidingPrinciplesColumn2 {
            guidingPrinciplesColumn2
          }
          guidingWhakataikiImage {
            file {
              url
            }
          }
          guidingWhakataikiText {
            guidingWhakataikiText
          }
          koraCardImage {
            file {
              url
            }
          }
          pakaiahiCardImage {
            file {
              url
            }
          }
          koraCardText {
            koraCardText
          }
          ahikaCardText {
            ahikaCardText
          }
          pakaiahiCardText {
            pakaiahiCardText
          }
        }
      }
    }
  }
`
