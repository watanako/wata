import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import "../styles/page/404.scss"

const NotFound = (props) => {
  return (
      <Layout>
        <Seo 
          pagetitle="ページが見つかりません"
          pagepath={props.location.pathname}
        />
        <h1 className="notfound">アクセスしたページは存在しません</h1>
      </Layout>
  )
}

export default NotFound
