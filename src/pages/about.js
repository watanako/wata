import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout.js"
import * as StylesPage from "../styles/components/page.module.scss"
import * as StylesAbout from "../styles/components/about.module.scss"
import Seo from "../components/seo.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"

const About = ( props ) => {
  return (
      <Layout>
        <Seo
          pagetitle="AboutMe"
          pagedesc="AboutMe"
          pagepath={props.location.pathname}
        />
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-home"><FontAwesomeIcon className="fa-home" icon={ faHome } />Home</Link>
          <p className="breadcrumb-last">About</p>
        </div>
        <div className={StylesPage.container}>
          <h1 className={StylesPage.h1}>About Page</h1>
          <p>ハンドルネーム：わた<br />Webデザイナー</p>
          <Img className={StylesAbout.img} fluid={props.data.file.childImageSharp.fluid} alt="わた" />
          <p>職業訓練校で半年学んだ後、Web制作会社に就職。<br />
          WordPressを使った企業サイトの制作（コーディング）を主に担当しています。<br />
          React,AWS勉強中。
          一風堂のラーメンが好き。
          </p>
        </div>
      </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: {eq: "about.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default About
