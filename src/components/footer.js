import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as StylesFooter from "../styles/components/footer.module.scss"

const Footer = () => {
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
        <footer className={StylesFooter.footer}>
            <p><small>&copy; {data.site.siteMetadata.title} { (new Date()).getFullYear() }</small></p>
        </footer>
    )
}

export default Footer