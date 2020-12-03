import React from "react"
import { Link, graphql } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
            <BannerImage heading={"Tāhuhu Nui o te Ngāti Manu"} image={Marae} imageAlt={"Tāhuhu Nui o te Ngāti Manu"} />
            <div className="cta-home">
              <div style={{ fontFamily: 'caveat', fontSize: '2rem' }}>
                Pupuhi te paura o te pū <br />
                  Pākarukaru ngā kōhua rino <br />
                  Tawhewhe ngā paraikete whero <br />
                  Engari, toitū te whenua <br />
              </div>
            </div>
          </Container>
        </Row>
        <Container style={{ padding: '10px' }}>
          <p>In 2017, Ngāti Manu hapu set up a PSGE (Post Settlement Governance Entity) Tāhuhu Nui o te Ngāti Manu’s  to receive and manage a settlement on behalf of Iwi members after the settlement is ratified by the Iwi.</p>

          <h4>5 things to know about PSGE</h4>

          <h6>1. What is a PSGE?</h6>
          <p>A PSGE is the body that will receive and look after settlement redress received from the Crown as part of our claimant groups Treaty of Waitangi settlement.</p>

          <h6>2. What does a PSGE do?</h6>
          <p>The PSGE will decide how the settlement redress is managed and how it can be used for the benefit of the members of Ngāti Manu. Redress can include cash, land, statutory acknowledgements, rights of first refusal, deeds of recognition and protocols with government departments and other agencies.</p>

          <h6>3. Are all types of entities acceptable to the Crown as a PSGE?</h6>
          <p>No.  Certain governance models are not acceptable to the Crown on the basis that they do not satisfy one or more of the Crown’s governance principles.</p>
          <p>In particular, the Crown will not accept the following as PSGE governance models:</p>
          <ul>
            <li>charitable trusts</li>
            <li>companies set up under the Companies Act 1993</li>
            <li>incorporated societies set up under the Incorporated Societies Act 1908</li>
            <li>Māori Trust Boards established under the Māori Trust Boards Act 1955</li>
          </ul>

          <h6>4. Will the Crown accept a private trust governance model?</h6>
          <p>Yes. A private trust model with subsidiary trusts or companies to manage the settlement are an acceptable form of governance model to the Crown provided certain criteria are meet.</p>

          <h6>5. What criteria does the Crown require for a PSGE?</h6>
          <p>The Crown has certain criteria that all PSGE’s need to meet.</p>
          <p>The Crown criteria includes a requirement that the proposed constitution or rules of the PSGE:</p>
          <ul>
            <li>adequately represents all members of the claimant group; and</li>
            <li>provides that the beneficiaries of the settlement and the beneficiaries of the governance entity are identical when the settlement assets are transferred from the Crown to the claimant group.</li>
          </ul>
          <p>The Crown will not complete settlement until a PSGE has been established.</p>
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
  }
`
