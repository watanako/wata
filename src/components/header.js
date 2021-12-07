import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import * as StylesHeader from "../styles/components/header.module.scss"

const Header = () => {
  const data = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
   `
  )
  return (
      <header>
          <h1 className={StylesHeader.title}>
              <Link to="/">{data.site.siteMetadata.title}</Link>
          </h1>
      </header>
  )
}

export default Header