import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import "../styles/page/index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperclip, faPencilAlt } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Index = () => {
  return (
    <div>
      <Layout>
        <Seo />
        <div className="tp-container">
          <div className="contents">
            <div className="content">
              <Link to="/about">
                <p className="faicon"><FontAwesomeIcon icon={faPaperclip} className="fa-4x" /></p>
                <p className="name">About</p>
              </Link>
            </div>
            <div className="content">
              <Link to="/blog">
                <p className="faicon"><FontAwesomeIcon icon={faPencilAlt} className="fa-4x" /></p>
                <p className="name">Blog</p>
              </Link>
            </div>
            <div className="content">
              <Link to="/contact">
                <p className="faicon"><FontAwesomeIcon icon={faEnvelope} className="fa-4x" /></p>
                <p className="name">Contact</p>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Index