import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import CoverImage from '../components/CoverImage';
import Header from '../components/post/postHeader';
import Footer from '../components/footer';

/**
 * This stateless, functional component wraps the DiscussionEmbed component.
 * Disqus is loaded only if window is available.  This fixes a problem when building
 * the HTML in gatsby.  Based on the answer in this thread.
 * https://stackoverflow.com/questions/48128022/gatsbyjs-build-show-error-window-is-not-defined-aos 
 * @param {string} disqusShortname - disqus name
 * @param {object} disqusConfig - configuration for disqus comment thread
 */
const Discussion = ({disqusShortname, disqusConfig}) => {
  if ((typeof window != "undefined") && disqusShortname && disqusConfig) {

    const Disqus = require('disqus-react');

    return (
      <Disqus.DiscussionEmbed 
        shortname={disqusShortname} config={disqusConfig} />
    );
  } else {
    return null;
  }
}

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
              <Discussion disqusShortname={disqusShortname} disqusConfig={disqusConfig} />
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
