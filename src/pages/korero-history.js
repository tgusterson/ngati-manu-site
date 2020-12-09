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

import Forest from '../../content/assets/banner-images/korero_history.png'
import Beach from '../../content/assets/history/beach.png'
import GoogleMap from '../../content/assets/history/google_map.png'
import Map from '../../content/assets/history/map.png'
import Origins from '../../content/assets/history/origins.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu History" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Ngāti Manu History"} heading2={"Te Timatanga o Ngāti Manu"} image={Forest} imageAlt={"Native New Zealand bush banner photograph"} />
            <div className="cta-home" />
          </Container>
        </Row>
        <Container fluid className="korero-history-container">
          <Row className="d-flex justify-content-center align-items-center mt-3">
            <Col xs={12} md={6}>
              <p>The origins of Ngāti Manu commence in Muriwhenua. According tō my forefathers Ngāti Manu derives from Ngamanu an ancestor of Tohe. In respect of this well known ancestor, he lived at Muriwhenua, his mountains are Maunga Piko and Kapowairua. His people were the guardians of Te Rerenga Wairua.</p>
            </Col>
            <Col xs={12} md={6}>
              <Image src={Origins} alt="Māori village" fluid rounded />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center mt-3 korero-history-flipped-row">
            <Col xs={12} md={6}>
              <p>Tohe's iwi fought against Ngāti Whātua at Muriwhenua. As a token of peacemaking, Tohe gave his grandchild Raninikura II as a wife for the chief of Ngāti Whātua . They moved tō Te Wairoa tō live. Their pā Ōunuwhao was located in the Dargaville district.</p>
            </Col>
            <Col xs={12} md={6}>
              <Image src={Map} alt="Muriwhenua map" fluid rounded />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center mt-3">
            <Col xs={12} md={6}>
              <p>However on his arrival at the shore at Riripō he was exhausted and died there. That place is called Mahutu. According to tradition, Tohe's eyes were eaten by birds, and because of that the hapū Ngāti Manu came about, for the descendants of Raninikura II. Therefore Ngāti Manu is an old name in Te Tai Tokerau.</p>
            </Col>
            <Col xs={12} md={6}>
              <Image src={Beach} alt="Beach landscape" className="korero-history-small-image" rounded />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center mt-3 mb-3 korero-history-flipped-row">
            <Col xs={12} md={6}>
              <p>Ngāti Manu moved from Wairoa tō Tautoro in the time of Te Rawheao.</p>
            </Col>
            <Col xs={12} md={6}>
              <Image src={GoogleMap} alt="Google map screenshot" fluid rounded />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center mt-3 mb-3 korero-history-flipped-row">
            <Col xs={12}>
              <i>Source: WAI 1040 WAI 354 WAI 1535 Te Ture Tiriti o Waitangi 1975 (kua whakawhitia) Te Paparahi o Te Raki Inquiry. A claim by Arapeta Wikito Pō ̄mare Hamilton on behalf of descendants of Pō ̄mare II and members of the Ngātī Manu, Te Uri Karaka, Te Uri o Raewera and Ngāpuhi ki Taumārere tribes (Wai 354)</i>
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
