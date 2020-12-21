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
      {data.allContentfulWaiata.edges.map((waiata, index) => {
        return (
          <WaiataCard
            image={waiata.node.image.file.url}
            alt={waiata.node.title}
            lyrics={waiata.node.lyrics.lyrics}
            audioSRC={waiata.node.audioFile !== null ? waiata.node.audioFile.file.url : null}
            key={index}
          />
        )
      })}
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
