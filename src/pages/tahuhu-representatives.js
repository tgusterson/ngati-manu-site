import React from "react"
import { graphql } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"
import RepCard from "../components/repCard"

import Fern from '../../content/assets/index/cards/fern.png'
import Jennifer from '../../content/assets/tahuhu-reps/jennifer.png'
import Phoebe from '../../content/assets/tahuhu-reps/phoebe.png'

const TahuhuReps = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Tāhuhu Representatives" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Tāhuhu Representatives"} image={Fern} imageAlt={"Tāhuhu Representatives banner"} />
            <div className="cta-home">
              <div>
                <h3 style={{ fontFamily: 'caveat', fontSize: '3rem' }}>Pou Hekenga</h3>
              </div>
            </div>
            {data.allContentfulTahuhuRep.edges.map((representative, index) => {
              let left = index % 2 !== 0 ? false : true;
              let right = index % 2 !== 0 ? true : false;
              console.log(index)
              return (
                <RepCard
                  key={index}
                  left={left}
                  right={right}
                  image={representative.node.picture.file.url}
                  name={representative.node.name}
                  body={representative.node.bio.bio}
                />
              )
            })}
            <hr />
            <Container>
              Other Tāhuhu Representatives:
              <ul>
                <li>Scotty Smith - Iritana Pōmare Rep</li>
                <li>Sacha Cherrington - Te Whareumu Rep</li>
              </ul>
              <p>If you are interested in supporting our Tāhuhu Representatives or upcoming Tāhuhu events please <a href="mailto:tahuhunui@gmail.com">tahuhunui@gmail.com</a> for more information.</p>
            </Container>
          </Container>
        </Row>
      </Container>
    </Layout>
  )
}

export default TahuhuReps

export const pageQuery = graphql`
  query {
            site {
            siteMetadata {
            title
          }
    }
    allContentfulTahuhuRep(sort: {fields: createdAt, order: ASC}) {
      edges {
        node {
          name
          bio {
            bio
          }
          picture {
          file {
            url
          }
        }
        }
      }
    }
  }
`
