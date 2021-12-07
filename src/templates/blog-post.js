import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
//import "../styles/page/blog-post.scss"
import * as StylesPost from "../styles/components/blog-post.module.scss"
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTag,faChevronLeft, faChevronRight, faHome, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const BlogPost = ( {data, pageContext, location } ) => {
  return (
    <Layout>
      <Seo
        pagetitle={data.markdownRemark.frontmatter.title}
        pagedesc={data.markdownRemark.frontmatter.description}
        pagepath={location.pathname}
      />
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-home"><FontAwesomeIcon className="fa-home" icon={ faHome } />Home</Link>
        <p className="breadcrumb-gt"><Link to="/blog" className="breadcrumb-home">Blog</Link></p>
        <p className="breadcrumb-last">{data.markdownRemark.frontmatter.title}</p>
      </div>
      <div className={StylesPost.post}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div className={StylesPost.post_data_container}>
        <p className={StylesPost.post_data}><FontAwesomeIcon icon={ faCalendarAlt } />{data.markdownRemark.frontmatter.dateFmt}</p>
          <ul className={StylesPost.post_tags}>
            <li><FontAwesomeIcon icon={ faTag } /></li>
            {data.markdownRemark.frontmatter.tags.map((tag, index) => (
            <li className={StylesPost.post_tag} key={index}><Link to={`/blog/tag/${tag.toLowerCase()}`}>{tag}</Link></li>
            ))}
          </ul>
        </div>
        <div className={StylesPost.post_content} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <ul className={StylesPost.next_post}>
        <li>{pageContext.previous && (
            <Link to={`/blog${pageContext.previous.fields.slug}`}>
              <FontAwesomeIcon className={StylesPost.prev} icon={ faChevronLeft } />{pageContext.previous.frontmatter.title}
            </Link>)}
          </li>
          <li>{pageContext.next && (
            <Link to={`/blog${pageContext.next.fields.slug}`}>
            {pageContext.next.frontmatter.title}<FontAwesomeIcon className={StylesPost.next} icon={ faChevronRight } />
            </Link> )}
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!){
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        date
        dateFmt:date(formatString: "YYYY/MM/DD")
        description
      }
      id
    }
    sakura: file(relativePath: {eq: "src/images/sakura.jpg"}) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sakura2: file(relativePath: {eq: "src/images/sakura2.jpg"}) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
