import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import * as StylesBlog from "../styles/components/blog.module.scss"
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"
import { faTag, faHome } from "@fortawesome/free-solid-svg-icons"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Blog = ( {data, location} ) => {
  return (
    <Layout>
      <Seo
        pagetitle="Blog"
        pagedesc="Blog"
        pagepath={location.pathname}
      />
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-home"><FontAwesomeIcon className="fa-home" icon={ faHome } />Home</Link>
        <p className="breadcrumb-last">Blog</p>
      </div>
      {data.allMarkdownRemark.nodes.map(node => (
        <article className={StylesBlog.container} key={node.id}>
          <h2 className={StylesBlog.container_title}><Link to={`/blog${node.fields.slug}`}>{node.frontmatter.title}</Link></h2>
          <p className={StylesBlog.container_summary} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <div className={StylesBlog.container_info}>
            <span><FontAwesomeIcon className={StylesBlog.container_icon} icon={ faCalendarAlt } />
              <time dateTime="{node.frontmatter.date}">{node.frontmatter.dateFmt}</time>
            </span>
            <div className={StylesBlog.container_tag}>
              <ul>
                <li><FontAwesomeIcon className={StylesBlog.container_tagicon} icon={ faTag } /></li>
                {node.frontmatter.tags.map((tag,index) => (
                <li key={index}><Link to={`/blog/tag/${tag.toLowerCase()}`}>{tag}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </Layout>
  )
}

export default Blog

export const query = graphql`{
  allMarkdownRemark(
    sort: {fields: frontmatter___date, order: DESC}
    limit: 1000
  ) {
    nodes {
      excerpt
      id
      html
      frontmatter {
        dateFmt:date(formatString: "YYYY/MM/DD")
        date
        title
        tags
      }
      fields {
        slug
      }
    }
  }
  markdownRemark {
    frontmatter {
      tags
    }
    id
  }
}
`
