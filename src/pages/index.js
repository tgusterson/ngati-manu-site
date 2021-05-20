import React from "react"
import { graphql } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/homeCarousel"
import CTA from "../components/cta"
import HomeCard from "../components/homeCard"

import Biodiversity from '../../content/assets/index/cards/biodiversity.png'
import Cadetship from '../../content/assets/index/cards/cadetship.png'
import Fern from '../../content/assets/index/cards/fern.png'
import Events from '../../content/assets/index/cards/events.png'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <Carousel />
            <CTA />
            <HomeCard
              left
              location={"/biodiversity/"}
              image={Biodiversity}
              heading={"Pōkai o Ngāti Manu"}
              subheading={"Biodiversity Management"}
              body={"Nā Ngāti Manu, Mā Ngati Manu, e ai ki a Ngāti Manu ki Te Herenga o Ngāti Manu hei tūāpapa ki te whakawhanake i ngā uri whakatipu, i ngā uri morehu, i ngā e haere mai ana."}
            />
            <HomeCard
              right
              location={"/cadetship/"}
              image={Cadetship}
              heading={"Ngā Kaitiaki o te Ahi"}
              subheading={"Ngāti Manu Cadetship"}
              body={"An innovative marae-based learning programme & curriculum at Te Karetu Marae."}
            />
            <HomeCard
              left
              location={"/tahuhu/"}
              image={Fern}
              heading={"Te Tāhuhu Nui O Ngāti Manu"}
              subheading={"Governance"}
              body={"Nā Ngāti Manu, Mā Ngati Manu, e ai ki a Ngāti Manu."}
            />
            <HomeCard
              right
              location={"/events/"}
              image={Events}
              heading={"Ngāti Manu Events"}
              body={"Check out what is happening and join the rest of Ngāti Manu in celebrations, discussions and other significant events."}
            />
          </Container>
        </Row>
      </Container>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
            site {
            siteMetadata {
            title
          }
    }
  }
`