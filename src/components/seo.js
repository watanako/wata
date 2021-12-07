import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ pagetitle, pagedesc, pagepath }) => {
    const {site: {siteMetadata}} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                  description
                  lang
                  title
                  siteUrl
                  locale
                  fbappid
                }
            }
        }
    `)

    const title = pagetitle ? `${pagetitle} | ${siteMetadata.title}` : siteMetadata.title
    const description = pagedesc  || siteMetadata.description
    const url = pagepath ? `${siteMetadata.siteUrl}${pagepath}` : siteMetadata.siteUrl

    return (
        <Helmet>
            <html lang={siteMetadata.lang} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            <meta property="og:site_name" content={siteMetadata.title} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content=" website" />
            <meta property="og:locale" content={siteMetadata.locale} />
            <meta property="fb:app_id" content={siteMetadata.fbappid} />
        </Helmet>
    )
}

export default Seo