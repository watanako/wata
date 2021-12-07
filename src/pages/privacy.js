import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout.js"
import * as StylesPage from "../styles/components/page.module.scss"
import Seo from "../components/seo.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const About = ( props ) => {
  return (
      <Layout>
        <Seo
          pagetitle="プライバシーポリシー"
          pagedesc="プライバシーポリシー"
          pagepath={props.location.pathname}
        />
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-home"><FontAwesomeIcon className="fa-home" icon={ faHome } />Home</Link>
          <p className="breadcrumb-last">Privacy Policy</p>
        </div>
        <div className={StylesPage.container}>
          <h1 className={StylesPage.h1}>プライバシーポリシー</h1>
          <p>当サイトのプライバシーポリシー・免責事項を次の通り記載します。</p>
          <h2 className={StylesPage.h2}>個人情報の利用目的について</h2>
          <p>当ブログでは、お問い合わせの際に氏名・メールアドレス等の個人情報を入力いただく場合があります。<br />
          取得した個人情報は、必要な連絡のみに利用させていただくもので、これらの目的以外では利用いたしません。</p>
          <h2 className={StylesPage.h2}>個人情報の第三者開示について</h2>
          <p>取得した個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。</p>
          <ul>
            <li className={StylesPage.disc}>本人の同意が得られた場合</li>
            <li className={StylesPage.disc}>法令により開示が求められた場合</li>
          </ul>
          <h2 className={StylesPage.h2}>Cookieの使用について</h2>
          <p>当ブログでは、広告配信やアクセス解析のためにCookieを使用しています。<br />
          Cookieによりブラウザを識別していますが、特定の個人の識別はできない状態で匿名性が保たれています。<br />
          Cookieの使用を望まない場合、ブラウザからCookieを無効に設定できます。</p>
          <h2 className={StylesPage.h2}>アクセス解析ツールについて</h2>
          <p>当ブログでは、Googleアナリティクスによりアクセス情報を解析しています。<br />
          アクセス情報の解析にはCookieを使用しています。また、アクセス情報の収集はCookieを無効にすることで拒否できます。<br />
          Google社のデータ収集・処理の仕組みについては、<a href="http://www.google.com/intl/ja/policies/privacy/partners/">こちら</a>をご覧ください。</p>
          <h2 className={StylesPage.h2}>免責事項</h2>
          <p>当ブログは、掲載内容によって生じた損害に対する一切の責任を負いません。<br />
          各コンテンツでは、できる限り正確な情報提供を心がけておりますが、正確性や安全性を保証するものではありません。<br />
          また、リンク先の他サイトで提供される情報・サービスについても、責任を負いかねますのでご了承ください。</p>
          <h2 className={StylesPage.h2}>著作権</h2>
          <p>当ブログに掲載されている文章・画像の著作権は、運営者に帰属しています。<br />
          法的に認められている引用の範囲を超えて、無断で転載することを禁止します。</p>
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

export default About
