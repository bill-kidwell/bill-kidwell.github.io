import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

import avatar from '../../img/avatar.png';

import misfit from './MiSFIT_Cover_Image.png';

const MiniPost = ({title, date, url, image}) => (
    <article className="mini-post">
        <header>
            <h3><a href={url}>{title}</a></h3>
            <time className="published" dateTime={date}>{date}</time>
            <a href="/about" className="author"><img src={avatar} alt="Bill Kidwell" /></a>
        </header>
        <a href={url} className="image"><img src={image} alt="" /></a>
    </article>
); 

MiniPost.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    url: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired
};

const links = [
    { 
        title: "MiSFIT: Mining Software Fault Information & Trends", 
        date: "April 2015", 
        url: "https://uknowledge.uky.edu/cs_etds/33/",
        image:  misfit
    }
];


const MiniPosts = () => {

    return (
        <section>
            <div className="mini-posts">
                {links.map( (link, index) => {
                    return (
                    <MiniPost key={index} 
                        title={link.title} 
                        date={link.date} 
                        url={link.url} 
                        image={link.image} />
                    );
                })}
            </div>
      </section>
    )
}

export default MiniPosts;