import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Sidebar from '../components/sidebar/sidebar';
import Post from '../components/post/shortPost';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteUrl = get(this, 'props.data.site.siteMetadata.url');
    const disqusShortname = get(this, 'props.data.site.siteMetadata.disqusShortname');
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
        <div id="wrapper">
          <div id="main">
            <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
            {posts.map( (post, index) => {
              return (
                <Post key={index} post={post} disqusShortname={disqusShortname} siteUrl={siteUrl} />
              );
            })}
          </div>
          <Sidebar />
        </div>
    )
  }
}

BlogIndex.propTypes = {
  route: PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
      url
      disqusShortname
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        excerpt
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          subtitle
          path
          cover {
            childImageSharp {
              sizes(maxWidth: 630) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
}
`