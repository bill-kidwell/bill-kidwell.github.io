import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'
import CoverImage from '../components/CoverImage';
import Footer from '../components/footer';

import xanderPic from '../img/Xander.jpg';

const AboutPage = (props) => {
    const siteTitle = get(props, 'data.site.siteMetadata.title')
    console.log(JSON.stringify(props));
    return (
        <div className="single">
            <div id="wrapper">
                <div id="main">
                    <Helmet title="About me" />

                    <article className="post">
                        <header>
                            <div className="title">
                                <h2><a href="#">About me</a></h2>
                            </div>
                        </header>
                        <p>
                            My name is Bill Kidwell. I am a software architect with OpenText Exstream in Lexington, KY. I have been working in the software industry since 1998. I completed my Ph.D. in Computer Science at the University of Kentucky in 2015.
                        </p>
                        <p>
                            On a more personal note, I have been married to my wife, Nora, since 1998. We are from the southern WV area. We have spent most of our time here in Lexington. Our son, Alexander was born in 2013.
                        </p>
                        <img style={{ 
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }} 
                            src={xanderPic} 
                            width={720} 
                            height={480}/>
                    </article>
                    <hr />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default AboutPage;

export const pageQuery = graphql`
  query AboutInfo {
    site {
      siteMetadata {
        title,
        author
      }
    }
  }
`