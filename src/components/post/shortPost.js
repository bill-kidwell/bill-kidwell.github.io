import React from 'react';
import PropTypes from 'prop-types';
import Disqus from 'disqus-react';
//import Img from 'gatsby-image';
import CoverImage from '../CoverImage';
import Header from './postHeader';


const Comments = ({ disqusConfig, disqusShortname }) => {
    if (disqusShortname && disqusConfig) {

        return (
            <span>
            <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                Comments
            </Disqus.CommentCount>
            </span>
        );

    } else {
        return null;
    }
}

Comments.propTypes = {
    disqusShortname: PropTypes.string,
    disqusConfig: PropTypes.object
}

// TODO: Add category link.  Add disqus control for likes, comments.
/*
            <ul class="stats">
                <li><a href="#">General</a></li>
                <li><a href="#" class="icon fa-heart">28</a></li>
                <li><a href="#" class="icon fa-comment">128</a></li>
            </ul>
*/
const Footer = ({ path, siteUrl, title, disqusShortname }) => {

    const disqusConfig = {
        url: siteUrl + path,
        identifier: path,
        title: title,
    };

    return (
        <footer>
            <ul className="actions">
                <li><a href={path} className="button big">Continue Reading</a></li>
            </ul>
            <ul className="stats">
                <li><a href="#" className="icon fa-comment"><Comments disqusShortname={disqusShortname} disqusConfig={disqusConfig} /></a></li>
            </ul>

        </footer>
    );
};

Footer.propTypes = {
    path: PropTypes.string.isRequired
}

const Post = ({ post, disqusShortname, siteUrl }) => {
    const { excerpt } = post.node;
    const {
        title,
        subtitle,
        path,
        date,
        cover
    } = post.node.frontmatter;
    return (
        <article className="post" key={path}>
            <Header title={title} subtitle={subtitle} path={path} date={date} />
            <CoverImage path={path} cover={cover} />
            <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            <Footer path={path} disqusShortname={disqusShortname} siteUrl={siteUrl} />
        </article>
    );
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    disqusShortname: PropTypes.string
};


export default Post;