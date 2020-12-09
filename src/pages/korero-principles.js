import React from "react";
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"

import Banner from '../../content/assets/banner-images/korero_principles.png'

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu Guiding Principles and Values " />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Ngāti Manu Guiding Principles & Values"} image={Banner} imageAlt={"Ngāti Manu Registration"} />
            <div className="cta-home">
              <div className="cta-content">
                <h3 style={{ fontFamily: 'caveat', fontSize: '2rem' }}>
                  Ngā Mātāpono o Ngāti Manu: E whakaae ana, <br />
                  e manawanui ana a Ngāti Manu ki ngā mātāpono o te tika,<br /> te pono, te aroha, me te manaaki</h3>
              </div>
            </div>
          </Container>
        </Row>
        <Container style={{ padding: '20px 10px' }}>
          <p><b>Principles:</b> Ngāti Manu adheres to the principles of appropriate justice, honest, sincerity, benevolent compassion, caring respect and hospitality - this is our wholehearted agreement and commitment</p>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Wā tātou mātāpono</th>
                <th>Kia manawanui tātou o Ngāti Manu </th>
                <th>Kia manawanui tātou o te Ohu ki te….</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tika - Appropriate Justice</td>
                <td>
                  The expression of tika is demonstrated through tikanga that are determined by Ngāti Manu kaumātua and the collective voice of persons with  Ngāti Manu birthright and
                </td>
                <td>
                  - Provide open and transparent evidence discussions, decisions and actions<br />
                  - Seek  advice and counsel from Ngāti Manu kaumātua<br />
                  - Engage in opportunities that foster and promote tika and tikanga for and with Ngāti Manu
                </td>
              </tr>
              <tr>
                <td>Pono - Honest sincerity</td>
                <td>The expression of pono provides Ngāti Manu persons with an opportunity to enhance personal  and whānau integrity and sincerity</td>
                <td>
                  - Contribute to discussions, decision making, and action plans with integrity and sincerity <br />
                  - Uphold tikanga practices of Ngāti Manu whānau, hāpu to maintain practices of honesty and truthfulness</td>
              </tr>
              <tr>
                <td>Aroha - Benevolent compassion</td>
                <td>The expression of aroha is demonstrated by one’s presence and cooperative influence in the affairs of whānau, hāpu, marae. It represents the creative force that come from the spirit of goodwill of one to another</td>
                <td>
                  - demonstrate by word and by action the duty of care for which Ngāti Manu is renowned <br />
                  - accord respect to one another and to others <br />
                  - upload actions of hospitality in the cooperative aspects of Ngāti Manu
                </td>
              </tr>
              <tr>
                <td>Manaaki - Caring respect and hospitality</td>
                <td>The expression of manaaki is demonstrated in the care, respect, and actions of hospitality of one to another, and in particular to the care of kaumātua, manuhiri</td>
                <td>
                  - demonstrate by word and by action the duty of care for which Ngāti Manu is renowned <br />
                - accord respect to one another and to others <br />
                - upload actions of hospitality in the cooperative aspects of Ngāti Manu
                </td>
              </tr>
            </tbody>
          </Table>
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
