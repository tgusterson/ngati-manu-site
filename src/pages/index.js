import React from "react"
import { Link, graphql } from "gatsby"

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
              location={"/registration/"}
              image={Biodiversity}
              heading={"Pokai o Ngāti Manu"}
              subheading={"Biodiversity Management"}
              body={"Nā Ngāti Manu, Mā Ngati Manu, e ai ki a Ngāti Manu ki Te Herenga o Ngāti Manu hei tūāpapa ki te whakawhanake i ngā uri whakatipu, i ngā uri morehu, i ngā e haere mai ana."}
            />
            <HomeCard
              right
              image={Cadetship}
              heading={"Kaitiaki o te Ahi"}
              subheading={"Ngāti Manu Cadetship"}
              body={"An innovative marae-based learning programme & curriculum at Te Karetu Marae."}
            />
            <HomeCard
              left
              location={"/tahuhu/"}
              image={Fern}
              heading={"Tāhuhu Nui o te Ngāti Manu"}
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

// import React from "react"
// import {Link, graphql} from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const BlogIndex = ({data, location}) => {
//   const siteTitle = data.site.siteMetadata?.title || `Title`
//   const posts = data.allMarkdownRemark.nodes

//   if (posts.length === 0) {
//     return (
//       <Layout location={location} title={siteTitle}>
//         <SEO title="All posts" />
//         <Bio />
//         <p>
//           No blog posts found. Add markdown posts to "content/blog" (or the
//           directory you specified for the "gatsby-source-filesystem" plugin in
//           gatsby-config.js).
//         </p>
//       </Layout>
//     )
//   }

//   return (
//     <Layout location={location} title={siteTitle}>
//       <SEO title="All posts" />
//       <Bio />
//       <ol style={{ listStyle: `none` }}>
//         {posts.map(post => {
//           const title = post.frontmatter.title || post.fields.slug

//           return (
//             <li key={post.fields.slug}>
//               <article
//                 className="post-list-item"
//                 itemScope
//                 itemType="http://schema.org/Article"
//               >
//                 <header>
//                   <h2>
//                     <Link to={post.fields.slug} itemProp="url">
//                       <span itemProp="headline">{title}</span>
//                     </Link>
//                   </h2>
//                   <small>{post.frontmatter.date}</small>
//                 </header>
//                 <section>
//                   <p
//                     dangerouslySetInnerHTML={{
//                       __html: post.frontmatter.description || post.excerpt,
//                     }}
//                     itemProp="description"
//                   />
//                 </section>
//               </article>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }

// export default BlogIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `
