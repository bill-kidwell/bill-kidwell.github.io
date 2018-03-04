import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import CoverImage from '../components/CoverImage';
import Header from '../components/post/postHeader';
import Footer from '../components/footer';
import Disqus from 'disqus-react';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteUrl = get(this.props, 'data.site.siteMetadata.url');

    const {
      title,
      subtitle,
      date,
      path,
      cover
    } = post.frontmatter;

    const disqusShortname = 'billkidwellblog';
    const disqusConfig = {
        url: siteUrl + path,
        identifier: path,
        title: title,
    };

    return (
      <div className="single">
        <div id="wrapper">
          <div id="main">
            <Helmet title={`${title} | ${siteTitle}`} />

            <article className="post">
              <Header title={title} subtitle={subtitle} path={path} date={date} 
                disqusShortname={disqusShortname} disqusConfig={disqusConfig} />
              <CoverImage path={path} cover={cover} />
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
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
        url
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
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
`
