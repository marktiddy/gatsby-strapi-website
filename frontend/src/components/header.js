import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Gatsby Site
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <StaticQuery
            query={graphql`
              query {
                allStrapiPages {
                  edges {
                    node {
                      strapiId
                      title
                    }
                  }
                }
              }
            `}
            render={data =>
              data.allStrapiPages.edges.map((page, i) => {
                return (
                  <li class="nav-item" key={page.node.strapiId}>
                    <Link to={`/${page.node.title}`} className="nav-link">
                      {page.node.title}
                    </Link>
                  </li>
                )
              })
            }
          />
        </ul>
      </div>
    </nav>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
