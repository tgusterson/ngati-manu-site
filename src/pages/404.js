import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: '150px 0', margin: 0, textAlign: 'center', }}>
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist.</p>
          </Container>
        </Row>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
