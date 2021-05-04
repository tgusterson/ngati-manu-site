import React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"
import Marae from '../../content/assets/index/carousel/marae.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu Tāhuhu" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Te Tāhuhu Nui O Ngāti Manu"} image={Marae} imageAlt={"Te Tāhuhu Nui O Ngāti Manu"} />
            <div className="cta-home">
              <div className="cta-content" style={{ fontFamily: 'caveat' }}>
                <h3>Pupuhi te paura o te pū <br />
                  Pākarukaru ngā kōhua rino <br />
                  Tawhewhe ngā paraikete whero <br />
                  Engari, toitū te whenua <br />
                </h3>
              </div>
            </div>
          </Container>
        </Row>
        <Container className="markdown-content-container">
          <ReactMarkdown source={data.allContentfulBasicPage.edges[0].node.body.body} />
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
    allContentfulBasicPage(filter: {contentful_id: {eq: "95jIYWmyK83njQV8teQXh"}}) {
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
