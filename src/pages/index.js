import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Sidebar from '../components/sidebar/sidebar';
import Post from '../components/post/shortPost';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
        <div id="main">
          <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
          {posts.map( (post, index) => {
            return (
              <Post key={index} post={post} />
            );
          })}
        </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        excerpt
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
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
/*
            cover {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
*/