import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout.js"
import * as StylesPage from "../styles/components/page.module.scss"
import * as StylesContact from "../styles/components/contact.module.scss"
import Seo from "../components/seo.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Contact = ( props ) => {
  return (
    <Layout>
      <Seo
        pagetitle="お問い合わせ"
        pagedesc="お問い合わせ"
        pagepath={props.location.pathname}
      />
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-home"><FontAwesomeIcon className="fa-home" icon={ faHome } />Home</Link>
        <p className="breadcrumb-last">Contact</p>
      </div>
      <div className={StylesPage.container}>
        <h1 className={StylesPage.h1}>お問い合わせ</h1>
        <div className={StylesContact.contactArea}>
          <p>お問い合わせ、ご要望等がございましたら、お気軽にお問い合わせください。</p>
          <p className={StylesContact.text}>送信にあたっては、<Link to="/privacy" target="_blank">プライバシーポリシー<FontAwesomeIcon icon={ faExternalLinkAlt } className={StylesContact.extlink} /></Link>をご覧ください。</p>
          <div className={StylesContact.contactInner}>
              <form id="mailForm" method="post" action="https://getform.io/f/53547d3d-f9d2-4d9a-ab91-d4cda9040687">
                  <table className={StylesContact.contactTable}>
                      <tr className={StylesContact.tableList}>
                        <th className={StylesContact.tableLeft}><label htmlFor="name">お名前<span className={StylesContact.essential}>必須</span></label></th>
                        <td className={StylesContact.tableRight}><input name="name" id="name" placeholder="例）山田 太郎" className={StylesContact.inputArea}  autocomplete="name" /></td>
                      </tr>
                      <tr className={StylesContact.tableList}>
                        <th className={StylesContact.tableLeft}><label htmlFor="mail">メールアドレス<span className={StylesContact.essential}>必須</span></label></th>
                        <td className={StylesContact.tableRight}><input id="email" name="email" placeholder="例）example@gmail.com" className={StylesContact.inputArea}  autocomplete="email" /></td>
                      </tr>
                      <tr className={StylesContact.tableList}>
                        <th className={StylesContact.tableLeft}><label htmlFor="subject">タイトル<span className={StylesContact.essential}>必須</span></label></th>
                        <td className={StylesContact.tableRight}><input id="subject" name="subject" className={StylesContact.inputArea}  autocomplete="on" /></td>
                      </tr>
                      <tr className={StylesContact.tableList}>
                        <th className={StylesContact.tableLeft}><label htmlFor="comment">お問い合わせ内容<span className={StylesContact.essential}>必須</span></label></th>
                        <td className={StylesContact.tableRight}><textarea id="body" name="message" className={StylesContact.inputArea2} ></textarea></td>
                      </tr>
                  </table>
                  <div className={StylesContact.submit}>
                    <button type="submit" id="button" className={StylesContact.submitBtn}>送信する</button>
                  </div>
              </form>
          </div>
        </div>
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
  }
`

export default Contact
