import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import CoverImage from '../components/CoverImage';
import Header from '../components/post/postHeader';
import Footer from '../components/footer';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    const {
      title,
      date,
      path,
      cover
    } = post.frontmatter;

    return (
      <div className="single">
        <div id="wrapper">
          <div id="main">
            <Helmet title={`${title} | ${siteTitle}`} />

            <article className="post">
              <Header title={title} path={path} date={date} />
              <CoverImage path={path} cover={cover} />
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
            <hr />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
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
`
