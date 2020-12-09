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

import Banner from '../../content/assets/banner-images/korero_pepeha.png'
import Painting from '../../content/assets/pepeha/pepeha_1.png'
import Photograph from '../../content/assets/pepeha/pepeha_2.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Pepeha" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Pepeha"} image={Banner} imageAlt={"Pepeha"} />
            <div className="cta-home" />
          </Container>
        </Row>
        <Container fluid style={{ fontSize: '1.2rem' }}>
          <Row className="d-flex justify-content-center align-items-center text-center mt-3 mb-3">
            <Col xs={12} md={6}>
              <Image src={Painting} fluid alt="Portrait painting" style={{ maxWidth: '363px' }} />
            </Col>
            <Col xs={12} md={6}>
              <p className="m-1">
                Ko Taumarere te Awa Tapu <br />
                Ko Otuihu te Pa <br />
                Ko Te Karetu te Marae <br />
                Ko Ngati Manu te Iwi <br />
                Ko Te Uri Karaka me Te Uri O Raewera nga Hapu<br />
                Ko Pomare II te Rangatira
            </p>
            </Col>
          </Row>
          <hr />
          <Row className="d-flex justify-content-center align-items-center text-center mb-3">
            <Col xs={12} md={6}>
              <Image src={Photograph} fluid alt="Historic photograph of Ngāti Manu" style={{ maxWidth: '363px' }} />
            </Col>
            <Col xs={12} md={6}>
              <p className="m-1">
                Taumārere is the sacred river <br />
                Otūihu is the fortified village <br />
                Te Kāretu is the Marae <br />
                Ngāti Manu is the people <br />
                Te Uri Karaka and Te Uri Raewera are the sub-tribes <br />
                Pōmare II is the chief
            </p>
            </Col>
          </Row>
        </Container>
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
