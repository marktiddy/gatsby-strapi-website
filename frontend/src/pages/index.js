import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container mt-3 text-dark">
      <StaticQuery
        query={graphql`
          query {
            strapiPages(strapiId: { eq: 1 }) {
              id
              content
              title
            }
          }
        `}
        render={data => (
          <>
            <div className="row">
              <div className="col">
                <h2 className="text-dark">{data.strapiPages.title}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ReactMarkdown
                  source={data.strapiPages.content}
                  transformImageUri={uri =>
                    uri.startsWith("http")
                      ? uri
                      : `${process.env.IMAGE_BASE_URL}${uri}`
                  }
                />
              </div>
            </div>
          </>
        )}
      />
    </div>
  </Layout>
)

export default IndexPage
