import React from 'react'
import Header from './header.js'
import Footer from './footer.js'
import "modern-css-reset"
import "../styles/components/layout.module.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Layout = ( props ) => {
    return (
        <div>
            <Header/>
            <main>
                { props.children }
            </main>
            <Footer/>
        </div>
    )
}

export default Layout