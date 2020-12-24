import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { TagMetadata } from "../components/tag"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const siteTitle = data.site.siteMetadata.title
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`
  return (
    <Layout location={"ok"} title={siteTitle}>
      <div>
        <h3>
          {`${totalCount} post${totalCount === 1 ? "" : "s"} tagged with `}
          <div style={{
            background: TagMetadata[tag].color,
            display: "inline",
            fontWeight: "normal",
            color: 'white',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 10,
            marginLeft: 5,
            marginRight: 5,
          }}>
            {tag}
          </div>
        </h3>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li key={slug}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`