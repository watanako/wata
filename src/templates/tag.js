import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
// import "../styles/page/blog.scss"
import * as StylesBlog from "../styles/components/blog.module.scss"
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"
import { faTag } from "@fortawesome/free-solid-svg-icons"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Tag = ( {data, pageContext, location} ) => {
  const { tag } = pageContext
  return (
    <Layout>
      <Seo 
        pagetitle = {`タグ : ${tag}`}
        pagedesc = {`タグ : ${tag}一覧ページ`}
        pagepath = {location.pagepath}
      />
      <h1 className={StylesBlog.h1_tag}>タグ : {tag}の一覧</h1>
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
                <li><FontAwesomeIcon icon={ faTag } /></li>
                {node.frontmatter.tags.map((tag, index) => (
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

export default Tag

export const query = graphql`
  query($tag: String) {
  allMarkdownRemark(
    sort: {fields: frontmatter___date, order: DESC}
    limit: 1000
    filter: { frontmatter: { tags: { in: [$tag] } } }
  ) {
    group(field: frontmatter___tags) {
      tag: fieldValue
      totalCount
    }
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
