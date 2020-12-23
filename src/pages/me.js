import React from "react"

import Layout from "../components/layout"

const MePage = ({ data, location })  => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h1>About Me</h1>
      <big>
        <b style={{color: "#42b28d"}}>Hello! </b>
        I am a software engineer, currently at
        <b style={{color: "#118ab2"}}> Square </b> 
        working on bringing delightful user experiences to sellers. Current obsessions of mine include pour over coffee, mechanical keyboards, and sci-fi books.
      </big>
    </Layout>
  )
}

export default MePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
