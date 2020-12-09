import React from "react";
import { graphql } from "gatsby"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"
import WaiataCard from "../components/waiataCard"

import Banner from '../../content/assets/banner-images/korero_waiata.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  console.log(data.allContentfulWaiata.edges)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu Waiata" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Waiata"} image={Banner} imageAlt={"Fantail bird photograph banner"} />
            <div className="cta-home" />
          </Container>
        </Row>
      </Container>
      <WaiataCard
        image={data.allContentfulWaiata.edges[0].node.image.file.url}
        alt={data.allContentfulWaiata.edges[0].node.title}
        lyrics={data.allContentfulWaiata.edges[0].node.lyrics.lyrics}
        audioSRC={data.allContentfulWaiata.edges[0].node.audioFile.file.url}
      />
      <WaiataCard
        image={data.allContentfulWaiata.edges[1].node.image.file.url}
        alt={data.allContentfulWaiata.edges[1].node.title}
        lyrics={data.allContentfulWaiata.edges[1].node.lyrics.lyrics}
        audioSRC={data.allContentfulWaiata.edges[1].node.audioFile.file.url}
      />
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
    allContentfulWaiata {
      edges {
        node {
          audioFile {
            file {
              url
            }
          }
          lyrics {
            lyrics
          }
          title
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`
