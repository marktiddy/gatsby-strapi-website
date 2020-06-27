import React from "react"

import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import SEO from "../components/seo"
import Layout from "../components/layout"

export const query = graphql`
  query PageQuery($id: Int!) {
    strapiPages(strapiId: { eq: $id }) {
      id
      title
      content
    }
  }
`

const Page = ({ data }) => {
  const page = data.strapiPages
  return (
    <Layout>
      <SEO title={page.title} />

      <div className="container mt-3 primary-text">
        <div className="row ">
          <div className="col">
            <h2>{page.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ReactMarkdown
              source={page.content}
              transformImageUri={uri =>
                uri.startsWith("http")
                  ? uri
                  : `${process.env.IMAGE_BASE_URL}${uri}`
              }
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page
