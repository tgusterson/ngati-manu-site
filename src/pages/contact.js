import React from "react";
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import Banner from '../../content/assets/banner-images/contact.png'

const ContactPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Ngāti Manu Contact Page" />
            <Container fluid>
                <Row>
                    <Container fluid style={{ padding: 0, margin: 0 }}>
                        <BannerImage heading={data.allContentfulBasicPage.edges[0].node.title} image={Banner} imageAlt={"Contact Us page banner image"} />
                        <div className="cta-home" />
                    </Container>
                </Row>
                <Row>
                    <Container fluid className="markdown-content-container">
                        <ReactMarkdown plugins={[gfm]} source={data.allContentfulBasicPage.edges[0].node.body.body} className={"p-4 table table-striped table-bordered responsive"} />
                    </Container>
                </Row>
            </Container>
        </Layout>
    )
}

export default ContactPage

export const pageQuery = graphql`
  query {
          site {
          siteMetadata {
          title
        }
    }
    allContentfulBasicPage(filter: {contentful_id: {eq: "4hCnbdRi0zO7B0JT6RVoyG"}}) {
      edges {
        node {
          body {
            body
          }
          title
        }
      }
    }
  }
`