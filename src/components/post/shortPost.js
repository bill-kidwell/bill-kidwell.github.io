import React from 'react';
import PropTypes from 'prop-types';
//import Img from 'gatsby-image';
import CoverImage from '../CoverImage';
import avatar from '../../img/avatar.png';

/*
After <time ... />
<a href="#" class="author">
    <span class="name">
        Jane Doe
    </span>
    < src="images/avatar.jpg" alt="" />
</a>
*/
const Header = ({ title, path, date }) => {
    return (
        <header>
            <div className="title">
                <h2><a href={path}>{title}</a></h2>
            </div>
            <div className="meta">
                <time className="published" dateTime="{date}">{date}</time>
                <a href="/about" className="author">
                    <span className="name">
                        Bill Kidwell
                    </span>
                    <img src={avatar} alt="" />
                </a>
            </div>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

// TODO: Add category link.  Add disqus control for likes, comments.
/*
            <ul class="stats">
                <li><a href="#">General</a></li>
                <li><a href="#" class="icon fa-heart">28</a></li>
                <li><a href="#" class="icon fa-comment">128</a></li>
            </ul>
*/
const Footer = ({ path }) => {
    return (
        <footer>
            <ul className="actions">
                <li><a href={path} className="button big">Continue Reading</a></li>
            </ul>
        </footer>
    );
};

Footer.propTypes = {
    path: PropTypes.string.isRequired
}

const Post = ({ post }) => {
    const { excerpt } = post.node;
    const {
        title,
        path,
        date,
        cover
    } = post.node.frontmatter;
    return (
        <article className="post" key={path}>
            <Header title={title} path={path} date={date} />
            <CoverImage path={path} cover={cover} />
            <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            <Footer path={path} />
        </article>
    );
}

Post.propTypes = {
    post: PropTypes.object.isRequired
};


export default Post;