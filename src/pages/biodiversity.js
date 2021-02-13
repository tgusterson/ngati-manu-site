import React from "react"
import ReactMarkdown from "react-markdown"
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
  const pokaiTabsContent = data.allContentfulBasicPage.edges.filter(tab => {
    const ids = ["zEnpM18wgugzV0rB4NtxE", "3HO2a4mPMgcum7jHtvWpdm", "BDLyqnVdZkdb1FLdJp9Y5"]
    return tab.node.contentful_id === ids[0] ||
      tab.node.contentful_id === ids[1] ||
      tab.node.contentful_id === ids[2]
  })
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu Biodiversity" />
      <Container fluid>
        <Row style={{ marginBottom: '1rem' }}>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Pokai o Ngāti Manu"} image={Banner} imageAlt={"Ngāti Manu Biodiversity Banner Image"} />
            <div className="cta-home">
              <div className="cta-content" style={{ fontFamily: 'Caveat', fontSize: '1.2rem', padding: '1.4rem' }}>
                E ai ki ngā tikanga a Pōkai o Ngāti Manu, kia whai koha ki ngā taonga uriuri o Ranginui rāua ko Papatūānuku ki te urunga o te tangata he kitenga a-ahurea, a-tinana, a-hinengaro otirā ā-wairua.
                “Ko au ko te awa, ko te awa ko au” e ai ki a Ngāti Manu ko te oranga awa, he oranga tangata, he hononga anō hoki ki te oranga a Ranginui rāua ko Papatūānuku me ā rāua tamariki, he oranga iwi.
              </div>
            </div>
          </Container>
        </Row>
        <div>

        </div>
        <Row className="biodiversity-tabs-container">
          <Tabs defaultActiveKey="Whakatakinga" id="biodiversity-tabs" style={{ width: '100%' }}>
            <Tab eventKey="Whakatakinga" title={pokaiTabsContent[0].node.title}>
              <ReactMarkdown allowDangerousHtml source={pokaiTabsContent[0].node.body.body} className="biodiversity-tab-content" />
            </Tab>
            <Tab eventKey="Kokiritanga" title={pokaiTabsContent[1].node.title}>
              <ReactMarkdown allowDangerousHtml source={pokaiTabsContent[1].node.body.body} className="biodiversity-tab-content" />
            </Tab>
            <Tab eventKey="Kawenga" title={pokaiTabsContent[2].node.title}>
              <ReactMarkdown allowDangerousHtml source={pokaiTabsContent[2].node.body.body} className="biodiversity-tab-content" />
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
    allContentfulBasicPage {
      edges {
        node {
          body {
            body
          }
          title
          contentful_id
        }
      }
    }
  }
`